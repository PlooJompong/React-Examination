import Navbar from '../components/Navbar.jsx';
import MainContainer from '../components/MainContainer.jsx';

const AboutMePage = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <h1 className="text-3xl text-center">About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          rerum est harum perspiciatis dolorum consequuntur fuga dolorem atque
          ex quia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque rerum est harum perspiciatis dolorum consequuntur fuga
          dolorem atque ex quia.
        </p>
      </MainContainer>
    </>
  );
};

export default AboutMePage;
