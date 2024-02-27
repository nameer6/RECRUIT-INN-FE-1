import styles from './Stages.module.css';
import Image from 'next/image';

const Stages = ({ currentStage, stages, completedStages }) => {

    const iconsize = 20;
    const activeColorCode = "#6137DB";
    const completedColorCode = "#6137DB";
    const completedTextColor = "#fff"
    const inactiveColorCode = "#ACA7BA"
    const inactiveBorder = "#F4F1FC"


    const isStageCompleted = (stage) => completedStages.includes(stage);
    console.log(completedStages);

    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }

    return (
        <>
            <div className={styles.stagesContainer}>
                <ul>
                    {
                        Object.keys(stages).map((stage, index) => {
                            return (
                                <>
                                    <li
                                        key={stage}
                                        style={
                                            currentStage === stages[stage] ?
                                                { borderColor: activeColorCode, color: activeColorCode } :
                                                isStageCompleted(stages[stage])
                                                    ? { borderColor: completedColorCode, backgroundColor: completedColorCode, color: completedTextColor } :
                                                    { borderColor: inactiveBorder, color: inactiveColorCode, backgroundColor: '#fff' }
                                        }
                                    >
                                        <span>{toTitleCase(stage.replace('_', ' '))}</span>
                                        <Image
                                            src={
                                                currentStage === stages[stage] ?
                                                    `/${stage}-active.svg`
                                                    : isStageCompleted(stages[stage]) ?
                                                        `/${stage}-completed.svg`
                                                        : `/${stage}.svg`
                                            }
                                            width={iconsize}
                                            height={iconsize}
                                        />

                                    </li>
                                    {index < Object.keys(stages).length - 1 && (
                                        <div style={
                                            currentStage === stages[stage] ?
                                                { backgroundColor: inactiveBorder } :
                                                isStageCompleted(stages[stage]) ? 
                                                { backgroundColor : completedColorCode} :
                                                { backgroundColor : inactiveBorder}
                                    } className={styles.stageLine}></div>
                                    )}
                                </>
                            )
                        })
                    }


                </ul>
            </div>
        </>
    )
}

export default Stages;