import React, { useState } from "react";
import styles from "./InvestmentOverview.module.css";
import { FaUsers, FaChartLine, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";
import Button from "../../Atoms/Button";
import InvestmentModal from "./InvestmentModal";

const InvestmentOverview = ({ propertyId, investmentData }) => {
  const [showInvestModal, setShowInvestModal] = useState(false);
  
  // Mock investment data (replace with actual API data)
  const investmentInfo = investmentData || {
    totalInvestors: 47,
    totalInvestmentAmount: 2750000,
    targetAmount: 5000000,
    expectedReturn: 14.5,
    minInvestment: 10000,
    projectedAppreciation: 8.2,
    rentalYield: 6.3,
    investmentDeadline: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
    status: "funding", // funding, fully_funded, closed
    ownershipPeriod: 5, // years
    exitStrategy: "Property sale after appreciation period or continued rental income",
    riskLevel: "Moderate",
    investmentStructure: "Special Purpose Vehicle (SPV)",
    fundingProgress: 55, // percentage
    projectedMonthlyIncome: 3200
  };

  // Calculate days left until investment deadline
  const calculateDaysLeft = () => {
    const deadline = new Date(investmentInfo.investmentDeadline);
    const today = new Date();
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  // Format currency function
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.sectionTitle}>Investment Overview</h3>
      
      <div className={styles.overviewGrid}>
        <div className={styles.fundingStatus}>
          <div className={styles.progressWrapper}>
            <div className={styles.customProgressContainer}>
              <div 
                className={styles.customProgressInner}
                style={{ 
                  background: `conic-gradient(#7065f0 ${investmentInfo.fundingProgress * 3.6}deg, #e6e6e6 ${investmentInfo.fundingProgress * 3.6}deg)` 
                }}
              >
                <div className={styles.customProgressCenter}>
                  <span className={styles.progressPercent}>{investmentInfo.fundingProgress}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fundingDetails}>
            <div className={styles.fundingTitle}>Funding Progress</div>
            <div className={styles.fundingValue}>
              {formatCurrency(investmentInfo.totalInvestmentAmount)} of {formatCurrency(investmentInfo.targetAmount)}
            </div>
            <div className={styles.fundingMeta}>
              <FaUsers size={14} />
              <span>{investmentInfo.totalInvestors} investors</span>
            </div>
            <div className={styles.timeLeft}>
              <FaCalendarAlt size={14} />
              <span>{calculateDaysLeft()} days left to invest</span>
            </div>
          </div>
        </div>
        
        <div className={styles.keyMetrics}>
          <h4>Key Investment Metrics</h4>
          <div className={styles.metricsGrid}>
            <div className={styles.metric}>
              <div className={styles.metricLabel}>Min Investment</div>
              <div className={styles.metricValue}>{formatCurrency(investmentInfo.minInvestment)}</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricLabel}>Expected Return</div>
              <div className={styles.metricValue}>{investmentInfo.expectedReturn}% p.a.</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricLabel}>Rental Yield</div>
              <div className={styles.metricValue}>{investmentInfo.rentalYield}%</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricLabel}>Ownership Period</div>
              <div className={styles.metricValue}>{investmentInfo.ownershipPeriod} years</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricLabel}>Property Appreciation</div>
              <div className={styles.metricValue}>{investmentInfo.projectedAppreciation}% yearly</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricLabel}>Risk Level</div>
              <div className={styles.metricValue}>{investmentInfo.riskLevel}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.investmentDetails}>
        <h4>Investment Structure</h4>
        <p>
          This property is structured as a {investmentInfo.investmentStructure} investment opportunity. 
          When you invest, you're purchasing shares in the property, entitling you to a proportional 
          share of rental income and appreciation.
        </p>
        
        <div className={styles.revenueProjection}>
          <h4>Revenue Projection</h4>
          <div className={styles.projectionTable}>
            <div className={styles.tableRow}>
              <div className={styles.tableHeader}>Projected Monthly Rental Income</div>
              <div className={styles.tableValue}>{formatCurrency(investmentInfo.projectedMonthlyIncome)}</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableHeader}>Annual Rental Growth</div>
              <div className={styles.tableValue}>3.5%</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableHeader}>Property Appreciation (5 years)</div>
              <div className={styles.tableValue}>{(investmentInfo.projectedAppreciation * 5).toFixed(1)}%</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableHeader}>Exit Strategy</div>
              <div className={styles.tableValue}>{investmentInfo.exitStrategy}</div>
            </div>
          </div>
        </div>
        
        <div className={styles.calculatorPreview}>
          <h4>Investment Calculator</h4>
          <p>See how your investment could grow with our investment calculator.</p>
          <div className={styles.previewBox}>
            <div className={styles.previewItem}>
              <div className={styles.previewLabel}>Investment Amount</div>
              <div className={styles.previewValue}>{formatCurrency(investmentInfo.minInvestment)}</div>
            </div>
            <div className={styles.previewItem}>
              <div className={styles.previewLabel}>5-Year Return</div>
              <div className={styles.previewValue}>
                {formatCurrency(investmentInfo.minInvestment * (1 + (investmentInfo.expectedReturn / 100) * 5))}
              </div>
            </div>
            <div className={styles.previewItem}>
              <div className={styles.previewLabel}>Monthly Income</div>
              <div className={styles.previewValue}>
                {formatCurrency((investmentInfo.minInvestment / investmentInfo.targetAmount) * investmentInfo.projectedMonthlyIncome)}
              </div>
            </div>
          </div>
          <div className={styles.investButtonContainer}>
            <Button type="primary" onClick={() => setShowInvestModal(true)}>Invest Now</Button>
            <button className={styles.calculatorButton}>Full Investment Calculator</button>
          </div>
        </div>
      </div>
      
      {showInvestModal && (
        <InvestmentModal 
          propertyId={propertyId}
          minInvestment={investmentInfo.minInvestment}
          onClose={() => setShowInvestModal(false)}
        />
      )}
    </div>
  );
};

export default InvestmentOverview;