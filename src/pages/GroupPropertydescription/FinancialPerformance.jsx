import React, { useState, useEffect } from "react";
import styles from "./FinancialPerformance.module.css";
import { 
  FaChartLine, 
  FaDollarSign, 
  FaCalendarAlt,
  FaArrowUp,
  FaArrowDown,
  FaInfoCircle,
  FaChartBar,
  FaChartPie
} from "react-icons/fa";
import { useSelector } from "react-redux";

const FinancialPerformance = ({ propertyId, propertyName }) => {
  const [performanceData, setPerformanceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeframe, setTimeframe] = useState("1y"); // 1m, 3m, 6m, 1y, all
  const [chartView, setChartView] = useState("income"); // income, appreciation, distributions
  const userDetails = useSelector((store) => store.user);
  
  // Mock data - replace with API call in production
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Mock financial performance data
      const mockData = {
        propertyValue: {
          initial: 5000000,
          current: 5450000,
          appreciation: 9,
          appreciationYTD: 4.2,
        },
        rentalIncome: {
          monthly: 32500,
          yearly: 390000,
          occupancyRate: 97,
          totalToDate: 780000,
        },
        distributions: {
          lastDistribution: 56000,
          lastDistributionDate: "2023-03-15",
          ytdDistributions: 168000,
          totalDistributions: 336000,
          nextEstimatedDistribution: 58000,
          nextEstimatedDate: "2023-06-15",
        },
        metrics: {
          cashOnCashReturn: 7.8,
          totalReturn: 13.2,
          capRate: 6.7,
          irr: 14.5,
        },
        incomeChart: [
          { month: "Jan", revenue: 32500, expenses: 12800, net: 19700 },
          { month: "Feb", revenue: 32500, expenses: 13100, net: 19400 },
          { month: "Mar", revenue: 32500, expenses: 12500, net: 20000 },
          { month: "Apr", revenue: 33000, expenses: 13000, net: 20000 },
          { month: "May", revenue: 33000, expenses: 12900, net: 20100 },
          { month: "Jun", revenue: 33000, expenses: 13200, net: 19800 },
          { month: "Jul", revenue: 33500, expenses: 13400, net: 20100 },
          { month: "Aug", revenue: 33500, expenses: 13100, net: 20400 },
          { month: "Sep", revenue: 33500, expenses: 13300, net: 20200 },
          { month: "Oct", revenue: 34000, expenses: 13700, net: 20300 },
          { month: "Nov", revenue: 34000, expenses: 13500, net: 20500 },
          { month: "Dec", revenue: 34000, expenses: 13900, net: 20100 },
        ],
        valueChart: [
          { month: "2022-01", value: 5000000 },
          { month: "2022-04", value: 5080000 },
          { month: "2022-07", value: 5125000 },
          { month: "2022-10", value: 5210000 },
          { month: "2023-01", value: 5320000 },
          { month: "2023-04", value: 5450000 },
        ],
        distributionsChart: [
          { month: "2022-03", amount: 52000 },
          { month: "2022-06", amount: 54000 },
          { month: "2022-09", amount: 53000 },
          { month: "2022-12", amount: 55000 },
          { month: "2023-03", amount: 56000 },
          { month: "2023-06", amount: 58000, projected: true },
        ],
        expenseBreakdown: [
          { name: "Property Management", value: 15 },
          { name: "Taxes", value: 25 },
          { name: "Insurance", value: 10 },
          { name: "Maintenance", value: 20 },
          { name: "Utilities", value: 5 },
          { name: "Reserves", value: 15 },
          { name: "Other", value: 10 },
        ],
      };
      
      setPerformanceData(mockData);
      setIsLoading(false);
    }, 1500);
  }, [propertyId]);

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Format percentage
  const formatPercentage = (value) => {
    return `${value.toFixed(1)}%`;
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Get chart data based on selected timeframe
  const getFilteredChartData = (data, timeframe) => {
    if (!data) return [];
    
    const currentDate = new Date();
    let filteredData = [...data];
    
    switch (timeframe) {
      case "1m":
        // Last month
        filteredData = data.slice(-1);
        break;
      case "3m":
        // Last 3 months
        filteredData = data.slice(-3);
        break;
      case "6m":
        // Last 6 months
        filteredData = data.slice(-6);
        break;
      case "1y":
        // Last 12 months (full year)
        // Already contains 12 months of data
        break;
      case "all":
        // All data
        // No filtering required
        break;
      default:
        break;
    }
    
    return filteredData;
  };

  // Get chart data based on selected view
  const getChartData = () => {
    if (!performanceData) return [];
    
    switch (chartView) {
      case "income":
        return getFilteredChartData(performanceData.incomeChart, timeframe);
      case "appreciation":
        return getFilteredChartData(performanceData.valueChart, timeframe);
      case "distributions":
        return getFilteredChartData(performanceData.distributionsChart, timeframe);
      default:
        return [];
    }
  };

  // Find max value in data for scaling
  const getMaxValue = (data) => {
    if (!data || data.length === 0) return 0;
    
    let max = 0;
    
    switch (chartView) {
      case "income":
        data.forEach(item => {
          max = Math.max(max, item.revenue, item.expenses, item.net);
        });
        break;
      case "appreciation":
        data.forEach(item => {
          max = Math.max(max, item.value);
        });
        break;
      case "distributions":
        data.forEach(item => {
          max = Math.max(max, item.amount);
        });
        break;
      default:
        break;
    }
    
    return max;
  };

  // Render a simplified chart visualization
  const renderSimplifiedChart = () => {
    const data = getChartData();
    
    if (data.length === 0) return (
      <div className={styles.noChartData}>
        <FaChartLine size={32} />
        <p>No data available for the selected timeframe</p>
      </div>
    );
    
    const maxValue = getMaxValue(data);
    
    switch (chartView) {
      case "income":
        return (
          <div className={styles.simplifiedChart}>
            <div className={styles.chartHeader}>
              <div className={styles.chartLegend}>
                <div className={styles.legendItem}>
                  <div className={styles.legendColor} style={{ backgroundColor: '#7065f0' }}></div>
                  <span>Revenue</span>
                </div>
                <div className={styles.legendItem}>
                  <div className={styles.legendColor} style={{ backgroundColor: '#e74c3c' }}></div>
                  <span>Expenses</span>
                </div>
                <div className={styles.legendItem}>
                  <div className={styles.legendColor} style={{ backgroundColor: '#27ae60' }}></div>
                  <span>Net Income</span>
                </div>
              </div>
              <div className={styles.chartMaxValue}>{formatCurrency(maxValue)}</div>
            </div>
            
            <div className={styles.barsContainer}>
              {data.map((item, index) => (
                <div key={index} className={styles.barGroup}>
                  <div className={styles.barInfo}>
                    <div className={styles.barValue}>{formatCurrency(item.net)}</div>
                    <div className={styles.barItem}>
                      <div 
                        className={styles.bar} 
                        style={{ 
                          height: `${(item.revenue / maxValue) * 100}%`,
                          backgroundColor: '#7065f0'
                        }}
                      ></div>
                    </div>
                    <div className={styles.barItem}>
                      <div 
                        className={styles.bar} 
                        style={{ 
                          height: `${(item.expenses / maxValue) * 100}%`,
                          backgroundColor: '#e74c3c'
                        }}
                      ></div>
                    </div>
                    <div className={styles.barItem}>
                      <div 
                        className={styles.bar} 
                        style={{ 
                          height: `${(item.net / maxValue) * 100}%`,
                          backgroundColor: '#27ae60'
                        }}
                      ></div>
                    </div>
                    <div className={styles.barLabel}>{item.month}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "appreciation":
        return (
          <div className={styles.simplifiedChart}>
            <div className={styles.chartHeader}>
              <div className={styles.chartLegend}>
                <div className={styles.legendItem}>
                  <div className={styles.legendColor} style={{ backgroundColor: '#7065f0' }}></div>
                  <span>Property Value</span>
                </div>
              </div>
              <div className={styles.chartMaxValue}>{formatCurrency(maxValue)}</div>
            </div>
            
            <div className={styles.lineChartContainer}>
              {data.map((item, index) => (
                <div 
                  key={index} 
                  className={styles.lineChartPoint}
                  style={{ 
                    left: `${(index / (data.length - 1)) * 100}%`,
                    bottom: `${(item.value / maxValue) * 80}%` // 80% to leave space for labels
                  }}
                  title={`${item.month}: ${formatCurrency(item.value)}`}
                >
                  <div className={styles.lineChartDot}></div>
                  <div className={styles.lineChartValue}>{formatCurrency(item.value)}</div>
                  <div className={styles.lineChartLabel}>{item.month}</div>
                </div>
              ))}
              
              {data.length > 1 && (
                <svg className={styles.lineChartSvg}>
                  <polyline
                    points={data.map((item, index) => {
                      const x = `${(index / (data.length - 1)) * 100}%`;
                      const y = `${100 - ((item.value / maxValue) * 80)}%`;
                      return `${x},${y}`;
                    }).join(' ')}
                    className={styles.lineChartPath}
                  />
                </svg>
              )}
            </div>
          </div>
        );
      
      case "distributions":
        return (
          <div className={styles.simplifiedChart}>
            <div className={styles.chartHeader}>
              <div className={styles.chartLegend}>
                <div className={styles.legendItem}>
                  <div className={styles.legendColor} style={{ backgroundColor: '#7065f0' }}></div>
                  <span>Distributions</span>
                </div>
                <div className={styles.legendItem}>
                  <div className={styles.legendColor} style={{ backgroundColor: '#a29bfa' }}></div>
                  <span>Projected</span>
                </div>
              </div>
              <div className={styles.chartMaxValue}>{formatCurrency(maxValue)}</div>
            </div>
            
            <div className={styles.barsContainer}>
              {data.map((item, index) => (
                <div key={index} className={styles.barGroup}>
                  <div className={styles.barInfo}>
                    <div className={styles.barValue}>{formatCurrency(item.amount)}</div>
                    <div className={styles.barItem}>
                      <div 
                        className={styles.bar} 
                        style={{ 
                          height: `${(item.amount / maxValue) * 100}%`,
                          backgroundColor: item.projected ? '#a29bfa' : '#7065f0'
                        }}
                      ></div>
                    </div>
                    <div className={styles.barLabel}>{item.month}</div>
                    {item.projected && (
                      <div className={styles.projectedLabel}>Projected</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  // Render expense breakdown with simple visualization
  const renderExpenseBreakdown = () => {
    if (!performanceData) return null;
    
    const COLORS = ['#7065f0', '#a29bfa', '#6c5ce7', '#9781f5', '#574bd2', '#b8b8ff', '#483d8b'];
    
    return (
      <div className={styles.expenseBreakdown}>
        <h4>Expense Breakdown</h4>
        <div className={styles.pieChartContainer}>
          <div className={styles.simplePieChart}>
            {performanceData.expenseBreakdown.map((entry, index) => (
              <div 
                key={index}
                className={styles.pieChartSegment}
                style={{
                  backgroundColor: COLORS[index % COLORS.length],
                  width: '100%',
                  height: '20px',
                  marginBottom: '8px'
                }}
              >
                <div className={styles.pieChartLabel}>
                  <span>{entry.name}: {entry.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.sectionTitle}>Financial Performance</h3>
      
      {isLoading ? (
        <div className={styles.loadingState}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading financial data...</p>
        </div>
      ) : !performanceData ? (
        <div className={styles.emptyState}>
          <p>No financial data available for this property.</p>
        </div>
      ) : (
        <>
          <div className={styles.keyMetricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricTitle}>Property Value</div>
              <div className={styles.metricValue}>{formatCurrency(performanceData.propertyValue.current)}</div>
              <div className={`${styles.metricChange} ${performanceData.propertyValue.appreciation > 0 ? styles.positive : styles.negative}`}>
                {performanceData.propertyValue.appreciation > 0 ? (
                  <FaArrowUp size={12} />
                ) : (
                  <FaArrowDown size={12} />
                )}
                <span>{formatPercentage(performanceData.propertyValue.appreciation)} since purchase</span>
              </div>
              <div className={styles.metricInfo}>
                <span>YTD: {formatPercentage(performanceData.propertyValue.appreciationYTD)}</span>
              </div>
            </div>
            
            <div className={styles.metricCard}>
              <div className={styles.metricTitle}>Monthly Rental Income</div>
              <div className={styles.metricValue}>{formatCurrency(performanceData.rentalIncome.monthly)}</div>
              <div className={styles.metricInfo}>
                <span>Yearly: {formatCurrency(performanceData.rentalIncome.yearly)}</span>
              </div>
              <div className={styles.metricInfo}>
                <span>Occupancy Rate: {performanceData.rentalIncome.occupancyRate}%</span>
              </div>
            </div>
            
            <div className={styles.metricCard}>
              <div className={styles.metricTitle}>Latest Distribution</div>
              <div className={styles.metricValue}>{formatCurrency(performanceData.distributions.lastDistribution)}</div>
              <div className={styles.metricInfo}>
                <span>Date: {formatDate(performanceData.distributions.lastDistributionDate)}</span>
              </div>
              <div className={styles.metricInfo}>
                <span>YTD: {formatCurrency(performanceData.distributions.ytdDistributions)}</span>
              </div>
            </div>
            
            <div className={styles.metricCard}>
              <div className={styles.metricTitle}>Next Estimated Distribution</div>
              <div className={styles.metricValue}>{formatCurrency(performanceData.distributions.nextEstimatedDistribution)}</div>
              <div className={styles.metricInfo}>
                <span>Estimated Date: {formatDate(performanceData.distributions.nextEstimatedDate)}</span>
              </div>
              <div className={styles.metricInfo}>
                <FaInfoCircle size={12} />
                <span>Subject to property performance</span>
              </div>
            </div>
          </div>
          
          <div className={styles.returnMetricsContainer}>
            <h4>Investment Performance Metrics</h4>
            <div className={styles.returnMetricsGrid}>
              <div className={styles.returnMetric}>
                <div className={styles.returnMetricLabel}>Cash-on-Cash Return</div>
                <div className={styles.returnMetricValue}>{formatPercentage(performanceData.metrics.cashOnCashReturn)}</div>
              </div>
              <div className={styles.returnMetric}>
                <div className={styles.returnMetricLabel}>Total Return</div>
                <div className={styles.returnMetricValue}>{formatPercentage(performanceData.metrics.totalReturn)}</div>
              </div>
              <div className={styles.returnMetric}>
                <div className={styles.returnMetricLabel}>Capitalization Rate</div>
                <div className={styles.returnMetricValue}>{formatPercentage(performanceData.metrics.capRate)}</div>
              </div>
              <div className={styles.returnMetric}>
                <div className={styles.returnMetricLabel}>IRR (Internal Rate of Return)</div>
                <div className={styles.returnMetricValue}>{formatPercentage(performanceData.metrics.irr)}</div>
              </div>
            </div>
          </div>
          
          <div className={styles.chartContainer}>
            <div className={styles.chartControls}>
              <div className={styles.chartViewSelector}>
                <button 
                  className={`${styles.viewButton} ${chartView === 'income' ? styles.active : ''}`}
                  onClick={() => setChartView('income')}
                >
                  Income
                </button>
                <button 
                  className={`${styles.viewButton} ${chartView === 'appreciation' ? styles.active : ''}`}
                  onClick={() => setChartView('appreciation')}
                >
                  Property Value
                </button>
                <button 
                  className={`${styles.viewButton} ${chartView === 'distributions' ? styles.active : ''}`}
                  onClick={() => setChartView('distributions')}
                >
                  Distributions
                </button>
              </div>
              
              <div className={styles.timeframeSelector}>
                <button 
                  className={`${styles.timeframeButton} ${timeframe === '1m' ? styles.active : ''}`}
                  onClick={() => setTimeframe('1m')}
                >
                  1M
                </button>
                <button 
                  className={`${styles.timeframeButton} ${timeframe === '3m' ? styles.active : ''}`}
                  onClick={() => setTimeframe('3m')}
                >
                  3M
                </button>
                <button 
                  className={`${styles.timeframeButton} ${timeframe === '6m' ? styles.active : ''}`}
                  onClick={() => setTimeframe('6m')}
                >
                  6M
                </button>
                <button 
                  className={`${styles.timeframeButton} ${timeframe === '1y' ? styles.active : ''}`}
                  onClick={() => setTimeframe('1y')}
                >
                  1Y
                </button>
                <button 
                  className={`${styles.timeframeButton} ${timeframe === 'all' ? styles.active : ''}`}
                  onClick={() => setTimeframe('all')}
                >
                  All
                </button>
              </div>
            </div>
            
            <div className={styles.chartHeader}>
              <h4>
                {chartView === 'income' && 'Monthly Income & Expenses'}
                {chartView === 'appreciation' && 'Property Value Appreciation'}
                {chartView === 'distributions' && 'Quarterly Distributions'}
              </h4>
            </div>
            
            <div className={styles.chart}>
              {renderSimplifiedChart()}
            </div>
            
            {chartView === 'income' && (
              <div className={styles.chartNote}>
                <FaInfoCircle size={14} />
                <span>Monthly revenue, expenses, and net income shown in USD</span>
              </div>
            )}
            
            {chartView === 'appreciation' && (
              <div className={styles.chartNote}>
                <FaInfoCircle size={14} />
                <span>Property valuation based on quarterly professional assessments</span>
              </div>
            )}
            
            {chartView === 'distributions' && (
              <div className={styles.chartNote}>
                <FaInfoCircle size={14} />
                <span>Distributions are paid quarterly. Projected distributions are estimates only.</span>
              </div>
            )}
          </div>
          
          <div className={styles.analyticsSplitContainer}>
            {renderExpenseBreakdown()}
            
            <div className={styles.personalInvestment}>
              <h4>Your Investment Performance</h4>
              {userDetails?.isLoggedIn ? (
                <div className={styles.personalStats}>
                  <div className={styles.personalStatItem}>
                    <div className={styles.personalStatLabel}>Your Investment</div>
                    <div className={styles.personalStatValue}>{formatCurrency(25000)}</div>
                  </div>
                  <div className={styles.personalStatItem}>
                    <div className={styles.personalStatLabel}>Ownership Share</div>
                    <div className={styles.personalStatValue}>0.5%</div>
                  </div>
                  <div className={styles.personalStatItem}>
                    <div className={styles.personalStatLabel}>Total Distributions Received</div>
                    <div className={styles.personalStatValue}>{formatCurrency(1680)}</div>
                  </div>
                  <div className={styles.personalStatItem}>
                    <div className={styles.personalStatLabel}>Current Investment Value</div>
                    <div className={styles.personalStatValue}>{formatCurrency(27250)}</div>
                  </div>
                  <div className={styles.personalStatItem}>
                    <div className={styles.personalStatLabel}>Total Return</div>
                    <div className={`${styles.personalStatValue} ${styles.positive}`}>+13.2%</div>
                  </div>
                </div>
              ) : (
                <div className={styles.loginPrompt}>
                  <p>
                    <FaInfoCircle size={14} />
                    Please <a href="/login">login</a> to view your personal investment performance.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className={styles.disclaimerNote}>
            <FaInfoCircle size={14} />
            <p>
              Past performance does not guarantee future results. The financial data provided is for informational purposes only and should not be considered as investment advice. All investments involve risk, including the loss of principal.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FinancialPerformance;