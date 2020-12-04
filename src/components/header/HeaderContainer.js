import { connect } from "react-redux";
import { Header } from "./Header";

let mapStateToProps= (state) =>{
    return{
        imgPhone:state.HeaderReducers.imgPhone
    }
}

export const HeaderContainer = connect(mapStateToProps,{})(Header)