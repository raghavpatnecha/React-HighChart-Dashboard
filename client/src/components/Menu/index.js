

//
const Menu = () => {
   
    //
    return (      
        <div className="app-header header-shadow">
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
            </div>  
            <div className="app-header__content">
                <div className="app-header-left">
                    <div className="search-wrapper">
                        <div className="input-holder">
                        <input type="text" className="search-input" placeholder="Type to search"/>
                        <button className="search-icon"><span></span></button>
                        </div>
                        <button className="close"></button>
                    </div>
                          </div>
                          <div className="app-header-right">
                    <div className="header-btn-lg pr-0">
                        <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                    <div className="btn-group">
                                    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                            <img width="42" className="rounded-circle" src="https://media-exp3.licdn.com/dms/image/C5103AQFxTkSkNsq4zQ/profile-displayphoto-shrink_400_400/0/1522775251384?e=1628726400&v=beta&t=qDmWGRUDYl78xrAVMaKakUtLl9tGdDPVvhBNFuHU9Dg" alt="" />
                                            <i className="fa fa-angle-down ml-2 opacity-8"></i>
                                        </a>
                                        <div  role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" className="dropdown-item">User Account</button>
                                            <button type="button"  className="dropdown-item">Settings</button>
                                            
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="widget-content-right header-user-info ml-3">
                                    <button type="button" className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                                        <i className="fa text-white fa-calendar pr-1 pl-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>        </div>
            </div>
        </div> 
            
    );
}
export default Menu;