import "./Info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="info_title">Infomation</div>
      <div>
        <img src="./image.jpg" alt="info_image" />
        <h5>📄시그너스 리마스터 공개</h5>
        <div className="info_article__date">22.06.28</div>
        <p className="info_article">
          넥슨(대표 서민)은 31일 온라인게임 ‘메이플 스토리(MapleStory)’에서
          ‘시그너스 기사단’ 계열의 캐릭터를 전면 개편하는 ‘시그너스 리턴즈’
          업데이트를 실시했다.
        </p>
      </div>
      <div>
        <img src="./image.jpg" alt="info_image" />
        <h5>📄이그니션 업데이트 패치 1.3</h5>
        <div className="info_article__date">22.06.25</div>
        <p className="info_article">
          넥슨 온라인게임 ‘메이플스토리’의 여름 업데이트인
          ‘이그니션(IGNITION)’의 첫 번째 패치로 ‘시그너스 기사단 리마스터’가
          적용 됐다.
        </p>
      </div>
    </div>
  );
};

export default Info;
