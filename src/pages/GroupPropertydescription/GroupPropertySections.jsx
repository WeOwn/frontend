import React, { useEffect, useRef } from "react";
import styles from "./GroupPropertySections.module.css";
import InvestmentOverview from "./investmentOverview";
import FinancialPerformance from "./FinancialPerformance";
import DocumentsReports from "./DocumentsReports";
import GroupChat from "./GroupChat";

// This component integrates all our group investment sections without external dependencies
const GroupPropertySections = ({ 
  propertyId,
  propertyName,
  onSectionRef,
  investmentData
}) => {
  // Create refs for each section
  const investmentOverviewRef = useRef(null);
  const financialPerformanceRef = useRef(null);
  const documentsReportsRef = useRef(null);
  const groupChatRef = useRef(null);
  
  // Register section refs with parent component
  useEffect(() => {
    if (onSectionRef && investmentOverviewRef.current) {
      onSectionRef('investment', investmentOverviewRef);
      onSectionRef('financial', financialPerformanceRef);
      onSectionRef('documents', documentsReportsRef);
      onSectionRef('chat', groupChatRef);
    }
  }, [onSectionRef]);
  
  return (
    <div className={styles.container}>
      {/* Investment Overview Section */}
      <div ref={investmentOverviewRef} id="investment-overview" className={styles.section}>
        <InvestmentOverview 
          propertyId={propertyId} 
          investmentData={investmentData}
        />
      </div>
      
      {/* Financial Performance Section */}
      <div ref={financialPerformanceRef} id="financial-performance" className={styles.section}>
        <FinancialPerformance 
          propertyId={propertyId} 
          propertyName={propertyName}
        />
      </div>
      
      {/* Documents & Reports Section */}
      <div ref={documentsReportsRef} id="documents-reports" className={styles.section}>
        <DocumentsReports 
          propertyId={propertyId} 
          propertyName={propertyName}
        />
      </div>
      
      {/* Group Chat Section */}
      <div ref={groupChatRef} id="group-chat" className={styles.section}>
        <GroupChat 
          propertyId={propertyId} 
          propertyName={propertyName}
        />
      </div>
    </div>
  );
};

export default GroupPropertySections;