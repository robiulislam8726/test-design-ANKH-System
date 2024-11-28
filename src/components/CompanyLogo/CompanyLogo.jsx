import logo from '../../assets/logo.png';

const CompanyLogo = () => {
  return (
    <div className="flex justify-center items-center mt-2 max-w-[1000px] h-[100px]">

      <div>
      <img className='justify-center items-center w-[328px]' src={logo} alt="" />
      </div>

      <div>
        <p className='justify-center items-center w-[376px]'> 株式会社アンクシステムズ コーポレートサイトへ </p>
      </div>


    </div>
  );
};

export default CompanyLogo;
