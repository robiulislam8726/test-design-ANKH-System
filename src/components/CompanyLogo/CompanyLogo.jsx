import logo from '../../assets/logo.png';
import arrow from '../../assets/arrow.png';

const CompanyLogo = () => {
  return (
    <div className="flex md:flex-row justify-center items-center mt-2 w-full h-[100px]">


      <img className='justify-center items-center mr-6 w-[328px]' src={logo} alt="" />


      <div>
        <p className='justify-center items-center w-[376px]'> 株式会社アンクシステムズ コーポレートサイトへ </p>

      </div>
      <img className='justify-end ml-6' src={arrow} alt="" />


    </div>
  );
};

export default CompanyLogo;
