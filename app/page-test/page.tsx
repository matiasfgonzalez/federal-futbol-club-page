import "./style.css";

const pageTest = () => {
  const jugadores = [
    {
      name: "Ángel Di María",
      imgBody: "/img/body/di-maria.webp",
      imgBodySF: "/img/body/di-maria2.webp",
    },
    {
      name: "Emiliano Martínez",
      imgBody: "/img/body/dibu.webp",
      imgBodySF: "/img/body/dibu2.webp",
    },
  ];

  return (
    <>
      <h1 className="text-center pt-5 pb-10">JUGADORES</h1>
      <div className="contenedorp">
        <div className="contenedor">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
            {jugadores.map((j, index) => (
              <div key={index} className="tarjeta shadow">
                <div className="imgBx">
                  <img src={j.imgBody} alt="" />
                </div>
                <img src={j.imgBodySF} className="c3d  img-sf" alt="" />
                <h2>{j.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default pageTest;
