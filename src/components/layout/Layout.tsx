import { FC, Fragment } from "react";
import Header from "./header/header";

const Layout: FC<any> = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
