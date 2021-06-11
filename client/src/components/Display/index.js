import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


//
const Display = ({channels,views,spent}) => {
   
    //function to handle submit button
    const optionView = {
        chart: {
          type: 'bar',
        },
        title: {
          text: ''
        },
        xAxis: {
            categories: channels,
        },
        legend: {
            enabled: false
        },        
        yAxis: {
            categories: views,
            title: {
                text: 'VIEWS'
              },
        },  
        colors: [
            '#3b5998', 
            '#3cba54', 
            '#E1306C', 
            '#c4302b',  
            '#FF5700', 
            '#c8232c', 
            '#0e76a8', 
            '#1DA1F2', 
            '#B5CA92'
            ],
        plotOptions: {
            bar: {
                colorByPoint: true
            }
        },     
        series : {  
            name : "Channel Name",    
            data : views
        }
    }

    const optionSpent = {
        chart: {
          type: 'column',         
        },
        title: {
            text: ''
          },
        xAxis: {
            categories: channels
        },
        yAxis: {
            categories: spent,
            title: {
                text: 'SPENT IN USD'
              },
        },
        colors: [
            '#3b5998', 
            '#3cba54', 
            '#E1306C', 
            '#c4302b',  
            '#FF5700', 
            '#c8232c', 
            '#0e76a8', 
            '#1DA1F2', 
            '#B5CA92'
            ],
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        legend: {
            enabled: false
        },
        series : { 
            name : "Channel Name",
            data : spent
          
        }
    }

    //
    return (      
            <div>
               
                        <div className="app-page-title">
                            <div className="page-title-wrapper">
                                <div className="page-title-heading">
                                    <div className="page-title-icon">
                                        <i className="pe-7s-car icon-gradient bg-mean-fruit">
                                        </i>
                                    </div>
                                    <div>Advertisement Analytics Dashboard
                                        <div className="page-title-subheading">This is a part of full stack developer assignment from Nabler. The backed APIs are done in Node and frontend in ReactJS. 
                                        As of now it has 4 APIs i.e GET, UPDATE , POST, DELETE. THe charts are made using highcharts wrapper. 
                                        </div>
                                    </div>
                                </div>
                                  </div>
                        </div>            <div className="row">
                            <div className="col-md-6 col-xl-4">
                                <div className="card mb-3 widget-content bg-midnight-bloom">
                                    <div className="widget-content-wrapper text-white">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">Total Channels</div>
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="widget-numbers text-white"><span>{channels.length}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="card mb-3 widget-content bg-arielle-smile">
                                    <div className="widget-content-wrapper text-white">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">Total Spent $</div>
                                            <div className="widget-subheading">USD</div>
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="widget-numbers text-white"><span>${spent.reduce((a, b) => a + b, 0)}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="card mb-3 widget-content bg-grow-early">
                                    <div className="widget-content-wrapper text-white">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">Total Views</div>
                                           
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="widget-numbers text-white"><span>{views.reduce((a, b) => a + b, 0)}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                                <div className="card mb-3 widget-content bg-premium-dark">
                                    <div className="widget-content-wrapper text-white">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">Products Sold</div>
                                            <div className="widget-subheading">Revenue streams</div>
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="widget-numbers text-warning"><span>$14M</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="mb-3 card">
                                    <div className="card-header-tab card-header-tab-animation card-header">
                                        <div className="card-header-title">
                                            <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                            Channel vs Views Report
                                        </div>
                                        
                                    </div>
                                    <div className="card-body">
                                        <HighchartsReact highcharts={Highcharts} options={optionView} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="mb-3 card">
                                    <div className="card-header-tab card-header">
                                        <div className="card-header-title">
                                            <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                            Channel vs Spent Report
                                        </div>  
                                    </div>
                                    <div className="card-body">
                                    <HighchartsReact highcharts={Highcharts} options={optionSpent} />
                                    </div>   
                                </div>
                            </div>
                        </div>
                    
            </div>
            
    );
}
export default Display;