import { useState, useEffect, useRef } from 'react';
import styles from './TopNavbar.module.css';
import Image from 'next/image';
import debounce from 'lodash.debounce';

const TopNavbar = ({ companyId , onJobSelect , onCandidateSelect}) => {
    const searchLogoSize = 20;
    const [query, setQuery] = useState('');
    const [searchType, setSearchType] = useState('Candidates');
    const [searchResults, setSearchResults] = useState(null);
    const searchResultsRef = useRef(null); 

    const searchApiCall = debounce(async (query, type) => {
        setSearchResults(null); 
        if (!query) return;

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/client-search?query=${query}&type=${type}&companyId=${companyId}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json(); 
            console.log('search API:', data)
            setSearchResults(data); 
        } catch (error) {
            console.error("Failed to fetch search results:", error);
        }
    }, 300);

    useEffect(() => {
        searchApiCall(query, searchType);
        return () => searchApiCall.cancel();
    }, [query, searchType]);

    const handleClickOutside = (event) => {
        if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
            setSearchResults(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <div className={styles.masterContainer}>
                <div className={styles.searchBar}>
                    <div className={styles.container}>
                        <div className={styles.searchInput}>
                            <Image src='/Search.svg' height={searchLogoSize} width={searchLogoSize} alt="Search" />
                            <input 
                                type='text'
                                placeholder="Search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                        <div className={styles.selectCategory}>
                            <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                                <option value='Candidates'>Candidates</option>
                                <option value='Jobs'>Jobs</option>
                            </select>
                        </div>
                    </div>
                </div>
                {searchResults && searchResults?.data && searchResults?.data?.data && (
                    <div className={styles.searchResults} ref={searchResultsRef}>
                        <ul>
                            {searchResults?.data?.data.map((result) => (
                                <li key={result?.position_id} onClick={() => {
                                    searchType === 'Jobs' ? onJobSelect(result) : onCandidateSelect(result);
                                    setSearchResults(null);
                                }}>{(result?.position) || (result?.name) }</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default TopNavbar;
