import 'react-quill/dist/quill.snow.css';
import styles from './TopContainer.module.css';
import dynamic from 'next/dynamic';
import React, { useEffect, useState, useRef } from 'react';

const TopContainer = ({setDescription}) => {
    const [QuillNoSSRWrapper, setQuillNoSSRWrapper] = useState(null);
    const [value, setValue] = useState('');
    const quillRef = useRef(null);

    useEffect(() => {
        const loadQuill = async () => {
            const { default: RQuill } = await import('react-quill');
            const QuillWrapper = React.forwardRef((props, ref) => <RQuill ref={ref} {...props} />);
            setQuillNoSSRWrapper(() => QuillWrapper);
        };
        loadQuill();
    }, []);

    useEffect(() => {
        if (quillRef.current) {
            const toolbar = quillRef.current.querySelector('.ql-toolbar.ql-snow');
            const container = quillRef.current.querySelector('.ql-container.ql-snow');

            if (toolbar) toolbar.style.border = 'none';
            if (container) container.style.border = 'none';
        }
    }, [quillRef.current]);

    useEffect(()=> {
        setDescription(value);
    },[value]);

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'], 
            [{ 'color': [] }, { 'background': [] }], 
            ['clean'], 
            [{ 'list': 'ordered'}, { 'list': 'bullet' }], 
            ['link', 'image', 'code-block'], 
            ['blockquote'] 
        ],
    };

    const placeholder = 
    `About us:
            Write about your company...

Job Description:
            Describe your job position...
    `;
    

    return (
        <>
            <div className={styles.super} ref={quillRef}>
                {QuillNoSSRWrapper && ( 
                    <QuillNoSSRWrapper placeholder={placeholder} className={styles.editor} modules={modules} value={value} onChange={setValue} />
                )}
            </div>
        </>
    )
}

export default TopContainer;