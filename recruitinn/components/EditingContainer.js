

import styles from './EditingContainer.module.css';
import TopContainer from './TopContainer';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const EditingContainer = () => {
    

    return (
        <>
            <div className={styles.superContainer}>
                <div className={styles.masterContainer}>
                    <TopContainer />
                    
                </div>
            </div>
        </>
    );
};

export default EditingContainer;
