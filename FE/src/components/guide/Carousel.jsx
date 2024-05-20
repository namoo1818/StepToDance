import { useState, useRef } from "react";
import Page from "./Page";
import styles from "../../styles/guide/Carousel.module.css";

const Carousel = ({ pages, pageWidth, gap, offset, onPageChange }) => {
    const [page, setPage] = useState(0);
    const containerRef = useRef(null);

    function renderItem({ item }) {
        return (
            <Page key={item.id} item={item} style={{ width: pageWidth, margin: `0 ${gap / 2}px` }} />
        );
    }

    const onScroll = () => {
        const scrollLeft = containerRef.current.scrollLeft;
        const newPage = Math.round(scrollLeft / (pageWidth + gap));
        setPage(newPage);
        onPageChange(newPage);
    }

    return (
        <div className={styles.container}>
            <div className={styles.flatList} ref={containerRef} onScroll={onScroll}>
                <div className={styles.flatListContent}>
                    {pages.map((item) => (
                        <div key={`page_${item.id}`} className={styles.pageWrapper}>
                            {renderItem({ item })}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.indicatorWrapper}>
                {pages.map((_, i) => (
                    <div key={`indicator_${i}`} className={[styles.indicator, i === page && styles.focused]} />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
