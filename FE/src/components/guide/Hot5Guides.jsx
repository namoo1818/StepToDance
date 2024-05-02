import {useState} from "react";
import styles from "../../styles/guide/Hot5Guides.module.css"
import Carousel from "./Carousel";

const screenWidth = window.innerWidth;

const guideList = [
    {
      id: 1,
      video_url: 'https://example.com/guide_video_1',
      thumbnail_img_url: 'src/assets/thumbnail.png',
      song_title: 'Yesterday',
      singer: 'The Beatles',
      genre: 'Rock',
      rank: 1,
      uploader: 'user123',
      count_feedback: 5,
      created_at: '2024-04-15T08:00:00Z',
    },
    {
      id: 2,
      video_url: 'https://example.com/guide_video_2',
      thumbnail_img_url: 'src/assets/thumbnail.png',
      song_title: 'Shape of You',
      singer: 'Ed Sheeran',
      genre: 'Pop',
      rank: 2,
      uploader: 'user456',
      count_feedback: 3,
      created_at: '2024-04-14T10:30:00Z',
    },
    {
      id: 3,
      video_url: 'https://example.com/guide_video_3',
      thumbnail_img_url: 'src/assets/thumbnail.png',
      song_title: 'Bohemian Rhapsody',
      singer: 'Queen',
      genre: 'Rock',
      rank: 3,
      uploader: 'user789',
      count_feedback: 7,
      created_at: '2024-04-13T15:45:00Z',
    },
    {
      id: 4,
      video_url: 'https://example.com/guide_video_4',
      thumbnail_img_url: 'src/assets/thumbnail.png',
      song_title: 'Yesterday',
      singer: 'The Beatles',
      genre: 'Rock',
      rank: 4,
      uploader: 'user123',
      count_feedback: 5,
      created_at: '2024-04-15T08:00:00Z',
    },
    {
      id: 5,
      video_url: 'https://example.com/guide_video_5',
      thumbnail_img_url: 'src/assets/thumbnail.png',
      song_title: 'Yesterday',
      singer: 'The Beatles',
      genre: 'Rock',
      rank: 5,
      uploader: 'user123',
      count_feedback: 5,
      created_at: '2024-04-15T08:00:00Z',
    },
  ];

function Hot5Guides(){
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>HOT 5</div>
            <Carousel gap={16} offset={36} pages={guideList}
        pageWidth={screenWidth - (16 + 36) * 2} onPageChange={handlePageChange}/>
            <div className={styles.text}>
                {guideList[currentPage].rank}위 {guideList[currentPage].song_title} - {guideList[currentPage].singer}
            </div>
        </div>
    );
}

export default Hot5Guides;