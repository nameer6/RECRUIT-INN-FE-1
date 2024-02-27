import styles from './AddSkillForm.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CandSelfSkill = ({ setTechStack }) => {
    const iconSize = 25;

    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');

    const [level1, setLevel1] = useState('beginner');
    const [level2, setLevel2] = useState('beginner');

    useEffect(() => {

        const skills = [
            { skill: skill1, level: level1 },
            { skill: skill2, level: level2 },
        ];

        setTechStack(skills);
    }, [skill1,skill2,level1,level2]);

    return (
        <>
            <form className={styles.addSkillFormContainer}>
                <div className={styles.inputField}>

                    <div className={styles.wrapper}>
                        <Image className={styles.img} src='/award.svg' width={iconSize} height={iconSize} />
                        <input type='text' placeholder='Add Required Skill' onChange={(e) => { setSkill1(e.target.value) }} />
                    </div>

                    <select placeholder='Choose level of difficulty' onChange={(e) => { setLevel1(e.target.value) }}>
                        <option value="beginner">Beginnner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>
                </div>

                <div className={styles.inputField}>
                    <div className={styles.wrapper}>
                        <Image className={styles.img} src='/award.svg' width={iconSize} height={iconSize} />
                        <input type='text' placeholder='Add Required Skill' onChange={(e) => { setSkill2(e.target.value) }} />
                    </div>

                    <select placeholder='Choose level of difficulty' onChange={(e) => { setLevel2(e.target.value) }}>
                        <option value="beginner">Beginnner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>
                </div>
            </form>
        </>
    )
}

export default CandSelfSkill;