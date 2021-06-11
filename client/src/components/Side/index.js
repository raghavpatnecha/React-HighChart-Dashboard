
//
const Side = () => {
   

    //
    return (      
            
        <div className="app-sidebar sidebar-shadow">
        <div className="app-header__logo">
            <div className="logo"><img alt="Nabler" title="Nabler" src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_c050a33f18d0a24d1ccfd0bbe23d029d/nabler.png" height="23px;" /></div>
           
        </div>
        <div className="app-header__mobile-menu">
            <div>
                <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div className="app-header__menu">
            <span>
                <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                    <span className="btn-icon-wrapper">
                        <i className="fa fa-ellipsis-v fa-w-6"></i>
                    </span>
                </button>
            </span>
        </div>    <div className="scrollbar-sidebar">
            <div className="app-sidebar__inner">
                <ul className="vertical-nav-menu">
                    <li className="app-sidebar__heading">Dashboards</li>
                    <li>
                        <a href="" className="mm-active">
                            <i className="metismenu-icon pe-7s-rocket"></i>
                            Advertisement Spent
                        </a>
                    </li>
                  
                   
                   
                  
                </ul>
            </div>
        </div>
    </div>
    );
}
export default Side;