const MainVideoTitle = ({title,overview}) => {

return (
  // <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
  <div className="absolute inset-0 z-20 w-screen aspect-video pt-[20%] px-6 md:px-24 text-white bg-gradient-to-r from-black">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-1/4">{overview}</p>
    <div className="flex items-center gap-4 mt-4">

  {/* <button className="flex items-center gap-3 bg-white text-black font-semibold text-lg px-8 py-3 rounded-md hover:bg-opacity-80 transition"> */}
  <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
    ▶
    Play
  </button>


  <button className="flex items-center gap-3 bg-white/30 text-white font-semibold text-lg px-8 py-3 rounded-md hover:bg-white/20 transition backdrop-blur-sm">
    <span className="text-2xl">ⓘ</span>
    More Info
  </button>
</div>
  </div>
);

}

export default MainVideoTitle;