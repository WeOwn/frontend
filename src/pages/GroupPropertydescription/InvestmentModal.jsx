import React, { useState } from "react";
import styles from "./InvestmentModal.module.css";
import { FaTimes, FaInfoCircle, FaCheckCircle } from "react-icons/fa";
import Button from "../../Atoms/Button";

const InvestmentModal = ({ propertyId, minInvestment, onClose }) => {
  const [investmentAmount, setInvestmentAmount] = useState(minInvestment);
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInvestmentChange = (e) => {
    let value = parseInt(e.target.value.replace(/,/g, ""));
    if (isNaN(value)) value = minInvestment;
    if (value < minInvestment) value = minInvestment;
    setInvestmentAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsProcessing(true);
      // Mock API call to process investment
      setTimeout(() => {
        setIsProcessing(false);
        setSuccess(true);
      }, 2000);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        
        {success ? (
          <div className={styles.successContent}>
            <div className={styles.successIcon}>
              <FaCheckCircle size={60} color="#7065f0" />
            </div>
            <h3>Investment Successful!</h3>
            <p>Your investment of {formatCurrency(investmentAmount)} has been processed successfully.</p>
            <p>You will receive a confirmation email with further details about your investment.</p>
            <div className={styles.buttonContainer}>
              <Button type="primary" onClick={onClose}>Continue</Button>
            </div>
          </div>
        ) : (
          <>
            <h3 className={styles.modalTitle}>
              {step === 1 ? "Invest in This Property" : "Complete Your Investment"}
            </h3>
            
            <div className={styles.stepIndicator}>
              <div className={`${styles.step} ${step >= 1 ? styles.active : ""}`}>1</div>
              <div className={styles.stepConnector}></div>
              <div className={`${styles.step} ${step >= 2 ? styles.active : ""}`}>2</div>
            </div>
            
            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <>
                  <div className={styles.formSection}>
                    <label htmlFor="investment-amount">Investment Amount</label>
                    <div className={styles.inputWrapper}>
                      <span className={styles.currencySymbol}>$</span>
                      <input
                        type="text"
                        id="investment-amount"
                        value={investmentAmount.toLocaleString()}
                        onChange={handleInvestmentChange}
                        className={styles.inputField}
                      />
                    </div>
                    <div className={styles.minInvestment}>
                      Minimum investment: {formatCurrency(minInvestment)}
                    </div>
                  </div>
                  
                  <div className={styles.investmentSummary}>
                    <h4>Investment Summary</h4>
                    <div className={styles.summaryItem}>
                      <div>Investment Amount</div>
                      <div>{formatCurrency(investmentAmount)}</div>
                    </div>
                    <div className={styles.summaryItem}>
                      <div>Transaction Fee (1%)</div>
                      <div>{formatCurrency(investmentAmount * 0.01)}</div>
                    </div>
                    <div className={styles.summaryItem}>
                      <div>Legal Documentation Fee</div>
                      <div>{formatCurrency(250)}</div>
                    </div>
                    <div className={`${styles.summaryItem} ${styles.summaryTotal}`}>
                      <div>Total</div>
                      <div>{formatCurrency(investmentAmount + (investmentAmount * 0.01) + 250)}</div>
                    </div>
                  </div>
                  
                  <div className={styles.investmentProjection}>
                    <h4>Projected Returns (5 years)</h4>
                    <div className={styles.projectionItem}>
                      <div>Total Rental Income</div>
                      <div>{formatCurrency(investmentAmount * 0.063 * 5)}</div>
                    </div>
                    <div className={styles.projectionItem}>
                      <div>Projected Property Appreciation</div>
                      <div>{formatCurrency(investmentAmount * 0.082 * 5)}</div>
                    </div>
                    <div className={`${styles.projectionItem} ${styles.projectionTotal}`}>
                      <div>Total Projected Return</div>
                      <div>{formatCurrency(investmentAmount + (investmentAmount * 0.063 * 5) + (investmentAmount * 0.082 * 5))}</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.formSection}>
                    <label>Select Payment Method</label>
                    <div className={styles.paymentMethods}>
                      <div
                        className={`${styles.paymentMethod} ${paymentMethod === "bank" ? styles.selected : ""}`}
                        onClick={() => setPaymentMethod("bank")}
                      >
                        <div className={styles.paymentIcon}>
                          <img src="/bank-transfer-icon.png" alt="Bank Transfer" />
                        </div>
                        <div>Bank Transfer</div>
                      </div>
                      <div
                        className={`${styles.paymentMethod} ${paymentMethod === "card" ? styles.selected : ""}`}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <div className={styles.paymentIcon}>
                          <img src="/credit-card-icon.png" alt="Credit Card" />
                        </div>
                        <div>Credit Card</div>
                      </div>
                    </div>
                  </div>
                  
                  {paymentMethod === "bank" && (
                    <div className={styles.bankDetails}>
                      <div className={styles.infoBox}>
                        <FaInfoCircle size={16} />
                        <p>
                          After submitting, you'll receive bank details to complete your wire transfer. 
                          Your investment will be confirmed once payment is received.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === "card" && (
                    <div className={styles.cardDetails}>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label htmlFor="card-number">Card Number</label>
                          <input
                            type="text"
                            id="card-number"
                            placeholder="1234 5678 9012 3456"
                            className={styles.inputField}
                          />
                        </div>
                      </div>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label htmlFor="card-name">Cardholder Name</label>
                          <input
                            type="text"
                            id="card-name"
                            placeholder="John Doe"
                            className={styles.inputField}
                          />
                        </div>
                      </div>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label htmlFor="card-expiry">Expiration Date</label>
                          <input
                            type="text"
                            id="card-expiry"
                            placeholder="MM/YY"
                            className={styles.inputField}
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label htmlFor="card-cvv">CVV</label>
                          <input
                            type="text"
                            id="card-cvv"
                            placeholder="123"
                            className={styles.inputField}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className={styles.termsAgreement}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={() => setAgreeTerms(!agreeTerms)}
                        className={styles.checkbox}
                      />
                      <span>
                        I have read and agree to the Investment Terms, Privacy Policy,
                        and Platform Agreement
                      </span>
                    </label>
                  </div>
                </>
              )}
              
              <div className={styles.buttonContainer}>
                {step === 2 && (
                  <button 
                    type="button" 
                    className={styles.backButton}
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                )}
                
                <Button 
                  type="primary" 
                  disabled={step === 2 && !agreeTerms}
                  isLoading={isProcessing}
                >
                  {step === 1 ? "Continue" : "Complete Investment"}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default InvestmentModal;