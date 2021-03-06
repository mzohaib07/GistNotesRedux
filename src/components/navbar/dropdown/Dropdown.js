import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginAuthUser } from "../../../utils/fetchUtils";
import { bindActionCreators } from "redux";
import { logout } from "../../../redux/actions/actions";
import "./style.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      authRecord: [],
      userName: "Zohaibkhattak15",
    };
    this.getAuth = this.getAuth.bind(this);
  }

  logOut = () => {
    this.props.logout();
    window.location = "/";
  };

  getAuth = async () => {
    const { userName } = this.state;
    let val = loginAuthUser(userName).then((data) =>
      this.setState({ authRecord: data })
    );
  };

  componentDidMount() {
    this.getAuth();
  }
  render() {
    const { authRecord } = this.state;
    return (
      <section>
        <div className="container">
          <div
            type="button"
            className="button"
            onClick={() => this.setState({ open: !this.state.open })}
          >
            <img
              src={authRecord?.avatar_url}
              alt=" Profile"
              className="profile-sec"
            />
          </div>
          {this.state.open && (
            <div className="dropdown-wrapper">
              <ul className="dropdown-menu">
                <li className="dropdown-menu__item">
                  Signed in as <br />
                  {authRecord?.login}
                </li>
                <hr />
                <Link to="/newsfeed">
                  <li className="dropdown-menu__item">Your Gists</li>
                </Link>
                <Link to="/get-stared-gists">
                  <li className="dropdown-menu__item">Starred Gists</li>
                </Link>
                <Link to="/create-a-gist">
                  <li className="dropdown-menu__item">Create A Gists</li>
                </Link>
                <li className="dropdown-menu__item">Help</li>
                <hr></hr>
                <Link to="/github-profile-page">
                  <li className="dropdown-menu__item">Your Github Profile</li>
                </Link>
                <li
                  className="dropdown-menu__item"
                  onClick={() => this.logOut()}
                >
                  Signout
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logout: logout }, dispatch);
};

export default connect(null,mapDispatchToProps)(Dropdown);