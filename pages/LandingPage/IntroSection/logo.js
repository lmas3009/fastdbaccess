const Logo = ({font}) => {
    return (
      <div className={`flex items-center gap-[1px] ${font==="large"?"text-xl":"text-base"}`}>
        <p className="poppins">fast</p>
        <p className="hatch mt-[5px]">db</p>
        <p className="poppins">access</p>
      </div>
    );
  };
  
  export default Logo;
  