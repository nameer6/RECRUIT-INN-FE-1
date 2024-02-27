import 'react-quill/dist/quill.snow.css';
import styles from './EditingContainer.module.css';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import TopContainer from './TopContainer';

const EditingContainer = ({ descriptionRef, setDescription }) => {
    return (
        <div className={styles.superContainer}>
            <div className={styles.masterContainer}>
                <TopContainer ref={descriptionRef} setDescription={setDescription} />
            </div>
        </div>
    );
};

export default EditingContainer;
