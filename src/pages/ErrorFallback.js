import React from "react";

import styles from "./ErrorBoundary.module.css";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Oops, something went wrong!</h1>
        <p className={styles.message}>
          We’re sorry, but an unexpected error occurred.
        </p>
        <pre className={styles.errorDetails}>{error.message}</pre>
        <button className={styles.button} onClick={resetErrorBoundary}>
          Try Again
        </button>
      </div>
    </div>
  );
};
export default ErrorFallback;
