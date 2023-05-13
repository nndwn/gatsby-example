import React from "react";
import Logo from "../components/logo";
import FormLogin from "./formlogin";
import LinkRepo from "../components/linkrepo";
import ResetCss from "../components/resetcss";
import Info from "../components/info";
import { colors, fontcss, pagelogin} from "./style";



const Pagelogin = () => {
    return (
        <ResetCss
            color={colors.dark}
            font={"poppins"}
            style={fontcss}
        >
            <main css={pagelogin}>
                <section>
                    <Logo
                        size= {50}
                    />
                <div>
                    <FormLogin/>
                    <Info
                        text={"This example Gatsby js User Authentication with hardcoded you can log in with username <strong>admin</strong> and password <strong>admin</strong>."}
                    />
                </div>
                </section>
                <LinkRepo
                
                />
            </main>
        </ResetCss>
    )
}

export default Pagelogin