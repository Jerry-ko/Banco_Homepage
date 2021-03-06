import bancoLogoImg from '../../assets/items/banco-logo.png';
import actionGolfImg1 from '../../assets/items/s1-p1.png';
import actionGolfImg2 from '../../assets/items/s1-p2.png';
import './actionGolf.css';

const ActionGolf = () => {
  return (
    <div className="main__action-golf">
      <div className="action-golf__text-box">
        <div className="action-golf__text-box-inside">
          <img
            className="up-on-scroll__x-left"
            src={bancoLogoImg}
            alt="main__logo"
          />
          <h3 className="up-on-scroll__x-left action-golf__title action-golf__main">
            액션골프
            <br />
            Action Golf
          </h3>
          <p className="up-on-scroll__x-left action-golf__description action-golf__sub">
            3축 자이로 센서 부착으로 스윙속도 및 <br />
            스윙궤적과 팔로우 각도, 골프스윙의 모션을 <br />
            분석인지해 플레이하는 인터랙티브 <br />
            골프게임입니다.
            <br />
            <br />
            실내에서 즐기는 가벼운 운동과 자세교정등의
            <br />
            효과가 탁월한 게임입니다.
          </p>
        </div>
      </div>
      <div className="action-golf__image-box">
        <img
          className="up-on-scroll__y-right action-golf__mobile"
          src={actionGolfImg1}
          alt="action-golf-1"
        />
        <img
          className="up-on-scroll__y-right action-golf__app-icon"
          src={actionGolfImg2}
          alt="action-golf-2"
        />
      </div>
    </div>
  );
};

export default ActionGolf;
