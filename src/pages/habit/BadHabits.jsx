import BadHabitTypes from "./BadHabitTypes";
import "./habit.css";

const BadHabits = () => {
  return (
    <>
      <div className="habits_container">
        <h1 style={{ color: "green", margin: "70px 0" }}>
          Zyýanly endikler hakynda gürrüňdeşlik
        </h1>
        <img src="/images/zyyanly1.jpg" alt="" />
        <h2 style={{ color: "gray", textAlign: "center", marginTop: "50px" }}>
          Zyýanly endikler hakynda gürrüňdeşlik
        </h2>
        <div className="habitsDescription">
          <p>
            Aşgabat şäher medeniýet müdirliginiň 7-nji çagalar sungat mekdebi
            hem-de Aşgabat şäher PM-niň Bagtyýarlyk etrap PB-mi bilen bilelikde
            geçirmeginde «Neşekeşlik we çilim çekmegiň zyýany» atly gürrüňdeşlik
            we söhbetdeşlik geçirildi.
          </p>
          <p>
            Gürrüňdeşlige Aşgabat şäher PM-niň Bagtyýarlyk etrap PB-niň
            KÝÝIBT-nyň gözegçisi polisiýanyň maýory G.Bäşimowa gatnaşdy. Myhman
            öz gezeginde çilim, nas we psihotrop maddalar we zyýanly endikler
            barada, tertip düzgün we kada-kanun, köçe ýol hereketleriniň
            düzgünlerini berk berjaý etmek barada, ynsan saglygyny goramak we
            dikeltmek, sagdyn durmuş ýörelgelerini işjeňleşdirmek, şeýle-de adam
            ömrüniň dowamlylygyna zyýan ýetirýän endikler, şol zyýanly
            endiklerden daşda durup öz saglyklaryny gorap, sportyň dürli
            görnüşleri bilen meşgul bolmaklarynyň wajypdygy dogrusynda gürrüň
            etdi.
          </p>
          <p>
            Gürrüňdeşligiň dowamynda Berkarar döwletiň täze eýýamynyň Galkynyşy
            döwründe Arkadagly Gahryman Serdarymyzyň tagallasy netijesinde, ýaş
            nesilleriň boş wagtlary sporta bedenterbiýä sarp edip berk bedenli,
            giň dünýägaraýyşly bolup ýetişmekleri üçin döredip berýän ähli
            mümkinçilikleri üçin Hormatly Prezidentimiziň Arkadagly Gahryman
            Serdarymyzyň janynyň sag, ömrüniň uzak bolamagyny arzuw etdiler.
          </p>
        </div>
        <center>
          <img
            style={{ width: "500px", height: "200px", marginTop: "40px" }}
            src="/images/line.png"
            alt=""
          />
        </center>
      </div>
      <BadHabitTypes />
    </>
  );
};

export default BadHabits;
