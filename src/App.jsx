import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Blogs from './components/blogs/Blogs';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import InfoBoxes from './components/infoboxes/InfoBoxes';
import InfoSectionFour from './components/infoSectionFour/InfoSectionFour';
import InfoSectionOne from './components/infoSectionOne/InfoSectionOne';
import InfoSectionThree from './components/infoSectionThree/InfoSectionThree';
import InfoSectionTwo from './components/infoSectionTwo/InfoSectionTwo';
import Navbar from './components/navbar/Navbar';
import Teams from './components/team/Teams';
import { GlobalStyles } from './components/styles/GlobalStyles';
import { Container } from './components/styles/Container.styled';

const theme = {
  colors: {
    primary: 'darkBlue',
    secondary: 'tomato',
    light: 'black',
    text: 'snow',
    textDark: 'gray',
    bgDefault: 'white',
    bgPrimary: 'darkBlue',
    bgSecondary: 'darkBlue',
    bgLight: 'aliceBlue',
    hoverColor: 'aliceBlue',
  },
};

const darktheme = {
  colors: {
    primary: 'white',
    secondary: 'tomato',
    light: 'yellow',
    text: 'snow',
    textDark: 'gray',
    bgDefault: 'black',
    bgPrimary: 'black',
    bgSecondary: 'black',
    bgLight: 'aliceBlue',
    hoverColor: '',
  },
};

function App() {
  const [mode, setMode] = useState(false);
  return (
    <ThemeProvider theme={mode ? darktheme : theme}>
      <GlobalStyles />
      <Container>
        <Navbar setMode={setMode} mode={mode} />
        <Hero />
        <InfoBoxes />
        <InfoSectionOne />
        <InfoSectionTwo />
        <InfoSectionThree />
        <InfoSectionFour />
        <Teams />
        <Blogs />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
