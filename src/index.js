import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


// import Credentials from './widgets/Credentials';
import CrashFilter from './voyager.widgets/CrashFilter';
import Header from './voyager.widgets/Header';
import YearSelector from './voyager.widgets/YearSelector';
import JurisdictionSelector from './voyager.widgets/JurisdictionSelector';
import ReportViewer from './voyager.widgets/ReportViewer';


// const credentials = new Credentials();
const baseURL = 'https://www.njvoyager.org/arcgis/rest/services/Voyager20180807/MapServer'; // Main Map Server and Layers
const baseServiceURL = baseURL + '/exts/VoyagerSOE/'; // Access SOE Services from ArcGIS Server
const yearsMin = 2005;
const yearsMax = 2020;
const defaultStartYear = 2016;
const defaultEndYear = 2020;
const reports = {
    jurisdictionReport: {
        title: 'vehicle occupants (fatality)',
        divName: 'reportHolder',
        service: 'TrendsMuniComparisonSummaryReport'
    }
};
const crashFilter = new CrashFilter({
    StartYear: defaultStartYear,
    EndYear: defaultEndYear
}, reports, baseServiceURL);
const header = new Header();
const yearSelector = new YearSelector(yearsMin, yearsMax, defaultStartYear, defaultEndYear);
const contentContainer = document.querySelector('#content-container');
const jurisdictionSelector = new JurisdictionSelector(crashFilter, true, true, true);
const reportViewer = new ReportViewer()




document.body.prepend(header.domNode);
header.controlList.append(yearSelector.domNode);
contentContainer.append(jurisdictionSelector.domNode);
contentContainer.append(reportViewer.domNode);

// // function loadUIElements() {
// //     // const jurisdictionSelector = new JurisdictionSelector(crashFilterReport, 'jurisdictionReports', null, false);

// //     jurisdictionSelectorContainer.append(jurisdictionSelector.domNode);
// // }