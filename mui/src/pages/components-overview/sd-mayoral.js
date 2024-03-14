// material-ui
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import {
  Avatar,
  AvatarGroup,
  Box,
  ButtonBase,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import YtdCard from 'components/cards/statistics/YtdCard';

import { activeItem } from 'store/reducers/menu';


function RunnerForm() {

  const englishDesc = 'San Diego (/ˌsæn diˈeɪɡoʊ/ SAN dee-AY-goh, Spanish: [san ˈdjeɣo]) is a city on the Pacific Ocean coast in Southern California located immediately adjacent to the Mexico–United States border. With a population of over 1.3 million residents, the city is the eighth-most populous in the United States and the second-most populous in the state of California after Los Angeles. The city is the seat of San Diego County, which has a population of nearly 3.3 million people as of 2021. San Diego is known for its mild year-round Mediterranean climate, extensive beaches and parks, its long association with the United States Navy, and its recent emergence as a healthcare and biotechnology development center. '
  const englishDates = 'The mayoral primary occurred on March 5, 2024. The general election will occur on November 5, 2024. General election candidates will be added here following the primary.'
  const englishInstr = 'Listed below are profiles on each of the candidates. Click on a card to learn more about them.'
  const spanishDesc = 'San Diego es una ciudad estadounidense ubicada en el condado de San Diego, California, en la costa del Océano Pacífico en el sur de California, aproximadamente 190 kilómetros al sur de Los Ángeles e inmediatamente adyacente a la frontera con México. Con una población estimada de 1,4 millones de personas para el año 2021,San Diego es la octava ciudad más grande de los Estados Unidos y la segunda más grande de California. Es parte de la conurbación San Diego-Tijuana, la segunda más grande aglomeración urbana entre los Estados Unidos y un país fronterizo, después de Detroit-Windsor, con una población de 4 922 723 habitantes. San Diego ha sido llamada «el lugar de nacimiento de California». Es conocida por su clima estable y cálido a lo largo del año, puertos naturales de aguas profundas, largas playas, larga cooperación con la Marina de los Estados Unidos y un reciente crecimiento de la industria de salud y biotecnología.'
  const spanishDates = 'Las primarias para alcalde tuvieron lugar el 5 de marzo de 2024. Las elecciones generales se llevarán a cabo el 5 de noviembre de 2024. Los candidatos para las elecciones generales se agregarán aquí después de las primarias.'
  const spanishInstr = 'A continuación se enumeran los perfiles de cada uno de los candidatos. Haga clic en una tarjeta para obtener más información sobre ellos.'
  const englishTitle = 'San Diego Mayoral Race'
  const spanishTitle = 'La Elección de San Diego Mayoral'
  const englishInc = 'Incumbent'
  const spanishInc = 'Titular'
  const englishCha = 'Challenger'
  const spanishCha = 'Contrincante'
  const toddEN = 'Todd Gloria, a Democratic mayoral candidate, focuses on infrastructure, mobility, and climate action. He aims for net-zero greenhouse gas emissions by 2035, implementing organic waste recycling, renewable energy for city facilities, and divesting from fossil fuels.'
  const toddES = 'Todd Gloria, candidato demócrata a la alcaldía, se centra en infraestructura, movilidad y acción climática. Su objetivo es lograr cero emisiones netas de gases de efecto invernadero para 2035, implementando el reciclaje de desechos orgánicos, energía renovable para las instalaciones de la ciudad y desinvirtiendo en combustibles fósiles.'
  const janeEN = 'Jane Glasson, a Republican mayoral candidate, emphasizes education, environmental initiatives, and addressing homelessness. As a teacher, Glasson advocates for increasing grass in California, providing food to the homeless, and improving drainage systems to prevent flooding.'
  const janeES = 'Jane Glasson, candidata republicana a la alcaldía, enfatiza la educación, las iniciativas ambientales y la lucha contra las personas sin hogar. Como maestra, Glasson aboga por aumentar el pasto en California, proporcionar alimentos a las personas sin hogar y mejorar los sistemas de drenaje para evitar inundaciones.'
  const genEN = 'Genevieve Jones-Wright, a Democratic lawyer running for mayor, aims to tackle the housing crisis and prioritize climate justice. She emphasizes the need to address infrastructure failures and systemic neglect, advocating for inclusive climate action and equitable outcomes to mitigate climate change\'s impact on vulnerable communities.'
  const genES = 'Genevieve Jones-Wright, una abogada demócrata que se postula para alcaldesa, tiene como objetivo abordar la crisis de vivienda y priorizar la justicia climática. Ella enfatiza la necesidad de abordar las fallas de infraestructura y la negligencia sistémica, abogando por una acción climática inclusiva y resultados equitativos para mitigar el impacto del cambio climático en las comunidades vulnerables.'
  const danEN = 'Dan Smeichowski, a real estate professional, promotes a "fifteen minute city" concept, aiming to boost accessibility/sustainability. He calls for community engagement in maintaining infrastructure to address flooding, especially in underserved areas, and prioritizes equitable responses to climate change.'
  const danES = 'Dan Smeichowski, un profesional inmobiliario, promueve un concepto de "ciudad de quince minutos", con el objetivo de impulsar la accesibilidad y la sostenibilidad. Pide la participación de la comunidad en el mantenimiento de la infraestructura para hacer frente a las inundaciones, especialmente en áreas desatendidas, y prioriza respuestas equitativas al cambio climático.'
  /*const scanDataChanged = () => {
    // If scan data is updated, then enable the submit button
    // and remove any notifications that were displayed about previous
    // operations
    setSubmitDisabled(false);
    setAlertIsOpen(false);
    setSuccessMessageIsOpen(false);
  };*/

  const texts = {
    english: {
      desc: englishDesc,
      dates: englishDates,
      instr: englishInstr,
      title: englishTitle,
      inc: englishInc,
      cha: englishCha,
      todd: toddEN,
      jane: janeEN,
      gen: genEN,
      dan: danEN,
    },
    spanish: {
      desc: spanishDesc,
      dates: spanishDates,
      instr: spanishInstr,
      title: spanishTitle,
      inc: spanishInc,
      cha: spanishCha,
      todd: toddES,
      jane: janeES,
      gen: genES,
      dan: danES,
    },
  };
  
  const [alignment, setAlignment] = React.useState('english');
  const [text, setText] = React.useState(texts.english);
  
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setText(texts[newAlignment]);
  };
  
  const { defaultId } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  
  return (
    
    
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sm={6} md={4} lg={12}>
        <MainCard>
          <Box sx={{
            p: 2,
            mt: 1,
            mb: 1,
            minWidth: 300,
          }}>
            <Grid container columnSpacing={45}>
              <Grid item lg={8}>
              <Typography variant="h1" component="h2">
                {text.title}
            </Typography>
               </Grid>
               <Grid item lg={4}>
               <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                  >
                    <ToggleButton value="english">English</ToggleButton>
                    <ToggleButton value="spanish">Español</ToggleButton>
                  </ToggleButtonGroup>
               </Grid>
            </Grid>
            <Typography>
              <br />{text.desc}
            </Typography>
            <Typography>
              <br />{text.dates}
            </Typography>
            <Typography>
              <br />{text.instr}
            </Typography>
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ButtonBase
          disableRipple
          component={Link}
          to="/TG"
        >
          <MainCard>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ color: 'primary.main' }}>
                {text.inc}
              </Typography>
              <Typography variant={'h4'}>
                Todd Gloria
              </Typography>
              <Box
                component="img"
                src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/263733416_325667869373920_7085565642460999312_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lMmy5hLfmDEAX98fW17&_nc_ht=scontent-lax3-2.xx&oh=00_AfAsR-1YLUuiG4aWlxpuUvm6OdNM3ECDRpKcIv_eBDnRJw&oe=65F874DF"
                sx={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 2 }}
              />
              <Typography variant={'p'}>
                {text.todd}
              </Typography>
            </Stack>
          </MainCard>
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ButtonBase sx={{ textAlign: 'left' }}>
          <MainCard>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ color: 'warning.main' }}>
                {text.cha}
              </Typography>
              <Typography variant={'h4'}>
                Jane Glasson
              </Typography>
              <Box
                component="img"
                src="https://ca-times.brightspotcdn.com/dims4/default/b1ddf6d/2147483647/strip/true/crop/1162x1162+0+0/resize/1200x1200!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa3%2F00%2Fec2463344c12a36e51ebaf1e9d3f%2Fimg-20220508-143151-777.jpg"
                sx={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 2 }}
              />
              <Typography>{text.jane}</Typography>
            </Stack>
          </MainCard>
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ButtonBase
          disableRipple
          component={Link}
          to="/GJW"
        >
          <MainCard>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ color: 'warning.main' }}>
              {text.cha}
              </Typography>
              <Typography variant={'h4'}>
                Genevieve Jones-Wright
              </Typography>
              <Box
                component="img"
                src="https://images.squarespace-cdn.com/content/v1/5edeeebc3032af28b09b6644/1597623006814-EO1HQAU3D2J53A4MFHVU/GJW.jpg?format=2500w"
                sx={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 2 }}
              />
              <Typography>
                {text.gen}
              </Typography>
            </Stack>
          </MainCard>
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ButtonBase
          disableRipple
          component={Link}
          onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
          to="/"
        >
          <MainCard>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ color: 'warning.main' }}>
              {text.cha}
              </Typography>
              <Typography variant={'h4'}>
                Dan Smeichowski
              </Typography>
              <Box
                component="img"
                src="https://thesandiegosun.com/wp-content/uploads/2024/01/Dan-Smiechowski.jpg"
                sx={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 2 }}
              />
              <Typography>
                {text.dan}
              </Typography>
            </Stack>
          </MainCard>
        </ButtonBase>
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

    </Grid>
  );
}

export default RunnerForm;
