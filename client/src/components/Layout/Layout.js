import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="keywords" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Gizmo.lk | Largest E-Commerce and Shopping Web Portal in Sri Lanka",
  description:
    "Gizmo.lk is Sri Lanka's premier online shopping portal, offering a wide array of products from electronics to fashion and home essentials. Known for its convenience, variety, and excellent customer service, it provides a seamless and secure shopping experience. As a leader in the e-commerce space, Gizmo.lk is committed to enriching the digital shopping landscape in Sri Lanka with its user-friendly platform and dedication to customer satisfaction.",
  keywords: "Gizmo.lk, E-Commerce, Shopping, E-Commerce Platform",
  author: "Yellow Wizards IT Solutions",
};

export default Layout;
