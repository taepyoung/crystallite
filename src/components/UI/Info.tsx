import "./Info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="info_title">Infomation</div>
      <div>
        <img src="./image.jpg" alt="info_image" />
        <h5>πμκ·Έλμ€ λ¦¬λ§μ€ν° κ³΅κ°</h5>
        <div className="info_article__date">22.06.28</div>
        <p className="info_article">
          λ₯μ¨(λν μλ―Ό)μ 31μΌ μ¨λΌμΈκ²μ βλ©μ΄ν μ€ν λ¦¬(MapleStory)βμμ
          βμκ·Έλμ€ κΈ°μ¬λ¨β κ³μ΄μ μΊλ¦­ν°λ₯Ό μ λ©΄ κ°νΈνλ βμκ·Έλμ€ λ¦¬ν΄μ¦β
          μλ°μ΄νΈλ₯Ό μ€μνλ€.
        </p>
      </div>
      <div>
        <img src="./image.jpg" alt="info_image" />
        <h5>πμ΄κ·Έλμ μλ°μ΄νΈ ν¨μΉ 1.3</h5>
        <div className="info_article__date">22.06.25</div>
        <p className="info_article">
          λ₯μ¨ μ¨λΌμΈκ²μ βλ©μ΄νμ€ν λ¦¬βμ μ¬λ¦ μλ°μ΄νΈμΈ
          βμ΄κ·Έλμ(IGNITION)βμ μ²« λ²μ§Έ ν¨μΉλ‘ βμκ·Έλμ€ κΈ°μ¬λ¨ λ¦¬λ§μ€ν°βκ°
          μ μ© λλ€.
        </p>
      </div>
    </div>
  );
};

export default Info;
