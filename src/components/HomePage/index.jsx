import React from "react";

import { HomePageWrapper } from "./style";
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts'

function HomePage() {
  const series1 = [
    {
      name: "desktop",
      data: [20, 70, 50, 70, 40, 100, 150],
    },
  ];
  const series2 = [
    {
      name: "mobile",
      data: [20, 65, 80, 90, 120, 85, 150],
    }
  ];

  const option3 = {
    labels: ["desktop", "mobile", "tablet"],
    title: {
      text: "Visit Customer",
      style: {
        fotnSize: "20px",
        color: " gray",
      },
    },
    style: {
      margin: "10px 20px",
    },
    colors: ["#1fd8a1", "#1245d1", "#27d6f5"],
    theme: {
      mode: "light",
    },
    dataLabels: {
      enabled: false,
    },
  };

  const option2 = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "string",
      category: ["Sun", "Mon", "Tue", 40, 50, 60, 70],
    },
    title: {
      text: "Analytics",
      style: {
        fotnSize: 30,
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };
  const option1 = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "number",
      category: [10, 20, 30, 40, 50, 60, 70],
    },
    title: {
      text: "Sales overview",
      style: {
        fotnSize: 30,
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };

  return (
    <HomePageWrapper>
      <div className="wrapper">
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src="https://cdn-icons.flaticon.com/png/512/2704/premium/2704332.png?token=exp=1644951333~hmac=090c13e8d44092a7e199199a3474527f" />
            </div>
            <img src="https://cdn-icons.flaticon.com/png/512/1477/premium/1477110.png?token=exp=1644951651~hmac=157bad3bacf2304e75ae7e0c9d4b005e" className="img2" />
          </div>

          <p className="price-card">$25,255,000</p>
          <div className="card-total">
            <p className="title-card">Today Sales</p>
            <div className="bb">
              <img src="https://cdn-icons.flaticon.com/png/512/4626/premium/4626173.png?token=exp=1644951744~hmac=4d44b1f1bf447fc95fb0386956e948c4" />
              <p>+35%</p>
            </div>
          </div>
        </div>
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077976.png" />
            </div>
            <img src="https://cdn-icons.flaticon.com/png/512/1477/premium/1477110.png?token=exp=1644951651~hmac=157bad3bacf2304e75ae7e0c9d4b005e" className="img2" />
          </div>

          <p className="price-card">$1255,00</p>
          <div className="card-total">
            <p className="title-card">Today Expenses</p>
            <div className="bb">
              <img src="https://cdn-icons-png.flaticon.com/512/64/64841.png" className="src" />
              <p className="p">+10%</p>
            </div>
          </div>
        </div>
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src="https://cdn-icons.flaticon.com/png/512/1165/premium/1165674.png?token=exp=1644951466~hmac=3663655dcfa2bc8ecb7a40fc9d43d1d1" />
            </div>
            <img src="https://cdn-icons.flaticon.com/png/512/1477/premium/1477110.png?token=exp=1644951651~hmac=157bad3bacf2304e75ae7e0c9d4b005e" className="img2" />
          </div>

          <p className="price-card">$5355</p>
          <div className="card-total">
            <p className="title-card">Today Visitors</p>
            <div className="bb">
              <img src="https://cdn-icons-png.flaticon.com/512/64/64841.png" />
              <p>+15%</p>
            </div>
          </div>
        </div>
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" />
            </div>
            <img src="https://cdn-icons.flaticon.com/png/512/1477/premium/1477110.png?token=exp=1644951909~hmac=a8496ec150cbee9842632bd8e734ec9c" className="img2" />
          </div>

          <p className="price-card">$500</p>
          <div className="card-total">
            <p className="title-card">Today Orders</p>
            <div className="bb">
              <img src="https://cdn-icons-png.flaticon.com/512/64/64841.png" />
              <p>+17%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="apexcharts1">
         
          <Chart
            style={{ margin: "auto",  padding:"10px 5px" }}
            options={option1}
            series={series1}
            type="bar"
            width={590}
            height="310"
          />
        </div>
        <div className="apexcharts2">
          <Chart
            style={{ margin: "10px -10px auto", backgroundColor:"white", padding:"10px 5px" }}
            options={option2}
            series={series2}
            type="area"
            width={380}
            height="270"
            title="Analtics"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="table">
          <p>Recent Product</p>
          <table>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Data</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>#2fbe0b</td>
              <td>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="nike"
                />
                Nike Air Max
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="bg">Shipping</td>
            </tr>
            <tr>
              <td>#8910bd</td>
              <td>
                <img
                  src="https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio3-wireless/plp/bbd.plpasset.headphones.studio3-v2.jpg.large.1x.jpg"
                  alt="headphone"
                />
                Headphone
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="bg2">Pasding</td>
            </tr>
            <tr>
              <td>#f33100</td>
              <td>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2yogWCKIU9nOAPVw5eCojBmfvT7t_HBYAlg&usqp=CAU"
                  alt="iphon"
                />
                Iphone Pro
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="bg3">Canseled</td>
            </tr>
          </table>

          <div className="table-footer">
            <Link to="/">See all</Link>
          </div>
        </div>
        <div className="charts">
          <Chart
            type="donut"
            width="360"
            series={[70, 20, 20]}
            options={option3}
            style={{
              margin: "30px 5px 0px 0px",
              height: "250px",
              backgroundColor: "white",
            }}
          ></Chart>
        </div>
      </div>
    </HomePageWrapper>
  );
}

export default HomePage;
