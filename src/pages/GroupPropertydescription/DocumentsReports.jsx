import React, { useState, useEffect } from "react";
import styles from "./DocumentsReports.module.css";
import { 
  FaFilePdf, 
  FaFileExcel, 
  FaFileWord, 
  FaFileImage, 
  FaFile, 
  FaDownload, 
  FaEye,
  FaLock,
  FaSearch,
  FaFilter
} from "react-icons/fa";
import { useSelector } from "react-redux";
import api from "../../service/apiGateway";

const DocumentsReports = ({ propertyId, propertyName }) => {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const userDetails = useSelector((store) => store.user);
  
  // Mock document categories
  const categories = [
    { id: "all", name: "All Documents" },
    { id: "legal", name: "Legal Documents" },
    { id: "financial", name: "Financial Reports" },
    { id: "property", name: "Property Reports" },
    { id: "tax", name: "Tax Documents" },
    { id: "meeting", name: "Meeting Minutes" }
  ];
  
  // Mock data - replace with API call in production
  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      const mockDocuments = [
        {
          id: "doc1",
          title: "Investment Agreement",
          description: "Legal contract outlining terms of investment and ownership structure",
          category: "legal",
          fileType: "pdf",
          fileSize: "2.4 MB",
          uploadDate: "2023-01-15T10:30:00",
          restricted: false,
          downloadCount: 45
        },
        {
          id: "doc2",
          title: "Q1 2023 Financial Report",
          description: "Quarterly financial performance and distributions report",
          category: "financial",
          fileType: "excel",
          fileSize: "1.8 MB",
          uploadDate: "2023-04-05T14:20:00",
          restricted: false,
          downloadCount: 37
        },
        {
          id: "doc3",
          title: "Property Inspection Report",
          description: "Annual inspection report with maintenance recommendations",
          category: "property",
          fileType: "pdf",
          fileSize: "5.6 MB",
          uploadDate: "2023-03-18T09:45:00",
          restricted: false,
          downloadCount: 29
        },
        {
          id: "doc4",
          title: "2022 Tax Statement",
          description: "Annual tax documentation for investors",
          category: "tax",
          fileType: "pdf",
          fileSize: "1.2 MB",
          uploadDate: "2023-02-10T11:15:00",
          restricted: false,
          downloadCount: 42
        },
        {
          id: "doc5",
          title: "Investor Meeting Minutes - Feb 2023",
          description: "Notes and action items from quarterly investor meeting",
          category: "meeting",
          fileType: "word",
          fileSize: "890 KB",
          uploadDate: "2023-02-22T15:30:00",
          restricted: false,
          downloadCount: 24
        },
        {
          id: "doc6",
          title: "Property Management Agreement",
          description: "Contract with property management company",
          category: "legal",
          fileType: "pdf",
          fileSize: "3.1 MB",
          uploadDate: "2023-01-08T13:40:00",
          restricted: true,
          downloadCount: 12
        },
        {
          id: "doc7",
          title: "Market Valuation Report",
          description: "Independent property valuation as of March 2023",
          category: "property",
          fileType: "pdf",
          fileSize: "4.2 MB",
          uploadDate: "2023-03-25T10:15:00",
          restricted: false,
          downloadCount: 31
        }
      ];
      setDocuments(mockDocuments);
      setIsLoading(false);
    }, 1000);
  }, [propertyId]);

  // Get filtered and searched documents
  const filteredDocuments = documents.filter(doc => {
    // Apply category filter
    if (filterCategory !== "all" && doc.category !== filterCategory) {
      return false;
    }
    
    // Apply search query
    if (searchQuery && !doc.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !doc.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  // Get file icon based on file type
  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'pdf':
        return <FaFilePdf size={24} className={styles.pdfIcon} />;
      case 'excel':
        return <FaFileExcel size={24} className={styles.excelIcon} />;
      case 'word':
        return <FaFileWord size={24} className={styles.wordIcon} />;
      case 'image':
        return <FaFileImage size={24} className={styles.imageIcon} />;
      default:
        return <FaFile size={24} className={styles.fileIcon} />;
    }
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

  // Handle document download
  const handleDownload = (document) => {
    // In a real app, this would initiate a file download
    console.log(`Downloading document: ${document.title}`);
    
    // Mock API call to record the download
    if (userDetails?.isLoggedIn) {
      // Update download count locally for demo purposes
      setDocuments(docs => 
        docs.map(doc => 
          doc.id === document.id 
            ? { ...doc, downloadCount: doc.downloadCount + 1 } 
            : doc
        )
      );
    }
  };

  // Handle document preview
  const handlePreview = (document) => {
    // In a real app, this would open a document preview
    console.log(`Previewing document: ${document.title}`);
    
    // Could open a modal with document preview
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.sectionTitle}>Documents & Reports</h3>
      
      <div className={styles.controlsContainer}>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.filterContainer}>
          <FaFilter className={styles.filterIcon} />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className={styles.filterSelect}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className={styles.documentsContainer}>
        {isLoading ? (
          <div className={styles.loadingState}>
            <div className={styles.loadingSpinner}></div>
            <p>Loading documents...</p>
          </div>
        ) : filteredDocuments.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No documents found matching your criteria.</p>
          </div>
        ) : (
          filteredDocuments.map(document => (
            <div key={document.id} className={styles.documentCard}>
              <div className={styles.documentIcon}>
                {getFileIcon(document.fileType)}
              </div>
              
              <div className={styles.documentInfo}>
                <div className={styles.documentTitle}>
                  {document.title}
                  {document.restricted && (
                    <span className={styles.restrictedBadge}>
                      <FaLock size={12} /> Restricted
                    </span>
                  )}
                </div>
                <div className={styles.documentDescription}>{document.description}</div>
                <div className={styles.documentMeta}>
                  <span className={styles.documentCategory}>{document.category}</span>
                  <span className={styles.documentSize}>{document.fileSize}</span>
                  <span className={styles.documentDate}>Uploaded: {formatDate(document.uploadDate)}</span>
                  <span className={styles.downloadCount}>{document.downloadCount} downloads</span>
                </div>
              </div>
              
              <div className={styles.documentActions}>
                {(!document.restricted || userDetails?.isAdmin) ? (
                  <>
                    <button
                      className={`${styles.actionButton} ${styles.previewButton}`}
                      onClick={() => handlePreview(document)}
                    >
                      <FaEye size={16} />
                      <span>Preview</span>
                    </button>
                    <button
                      className={`${styles.actionButton} ${styles.downloadButton}`}
                      onClick={() => handleDownload(document)}
                      disabled={!userDetails?.isLoggedIn}
                    >
                      <FaDownload size={16} />
                      <span>Download</span>
                    </button>
                  </>
                ) : (
                  <div className={styles.restrictedMessage}>
                    <FaLock size={14} />
                    <span>Access restricted to administrators</span>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      
      {!userDetails?.isLoggedIn && (
        <div className={styles.loginPrompt}>
          <p>
            <FaLock size={14} /> Please <a href="/login">login</a> to download documents.
            <br />
            Some documents may be restricted to investors only.
          </p>
        </div>
      )}
    </div>
  );
};

export default DocumentsReports;