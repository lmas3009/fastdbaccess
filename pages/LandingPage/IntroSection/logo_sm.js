const Logo = ({font}) => {
    return (
      <div className={`flex items-center gap-[1px] ${font==="large"?"text-xl":"text-base"}`}>
        <p className="poppins">f</p>
        <p className="hatch mt-[5px]">db</p>
        <p className="poppins">a</p>
      </div>
    );
  };
  
  export default Logo;
  