import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import MainLandingSectionOne from '../../sections/MainLandingSectionOne';
import ProductSummaryThreeColumns from '../../sections/ProductSummaryThreeColumns';
import FeaturetteImageLeft from '../../sections/FeaturetteImageLeft';//'../../sections/FeaturetteImageLeft';
import FeaturetteImageRight from '../../sections/FeaturetteImageRight';

const LandingPage = () => {
    return (
        <>
        <Header></Header>
        <MainLandingSectionOne />
        <FeaturetteImageLeft />
        <ProductSummaryThreeColumns />
        <FeaturetteImageRight />
        <Footer></Footer>
        </> 
    );
}
 
export default LandingPage;