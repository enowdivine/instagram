import React from "react";
import Sidebar from "../../components/Sidebar";
import "./dashboard.css";
import Chart from "../../components/Chart";
import Stats from "../../components/Stats";
import UserChart from "../../components/UserChart";
import { BsFillBarChartFill } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { BiMoney } from "react-icons/bi";
import { AiFillThunderbolt, AiFillBell } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top-bar bg-dark">
        <nav>
          <ul>
            <li>
              <Sidebar />
            </li>
            <li className="heading">
              INFOCMR <span className="text-danger">DASHBOARD</span>
            </li>
          </ul>
          <ul>
            <li className="notification">
              <AiFillBell size={25} />
            </li>
            <li className="mt-1">
              <CgMenuGridR size={30} />
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <div className="row-one">
          <div className="card">
            <div className="card-body">
              <div className="card-content">
                <div className="writeups">
                  <h5>Welcome Boss Admin</h5>
                  <p>Number Of Reports</p>
                </div>
                <div className="values">
                  <span>187</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-content">
                <div className="writeups">
                  <h5>Active Accounts</h5>
                  <p>Number Of Reports</p>
                </div>
                <div className="values">
                  <span>187</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-content">
                <div className="writeups">
                  <h5>Inactive Accounts</h5>
                  <p>Number Of Reports</p>
                </div>
                <div className="values">
                  <span>187</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-two">
          <Statistic
            icon={<ImUsers size={50} color="#ccc" />}
            color="indigo"
            value="33234"
            title="Number Of Users"
          />
          <Statistic
            icon={<MdWork size={50} color="#ccc" />}
            color="red"
            value="33234"
            title="Number Of Institutions"
          />
          <Statistic
            icon={<AiFillThunderbolt size={50} color="#ccc" />}
            color="green"
            value="33234"
            title="Number Of Adverts"
          />
          <Statistic
            icon={<BiMoney size={50} color="#ccc" />}
            color="orange"
            value="33234"
            title="Total Income"
          />
        </div>
        <div className="charts">
          <div className="income-chart">
            <div className="card">
              <div className={`card-body charts-wrapper`}>
                <div className="chart-one">
                  <Chart />
                </div>
                <div className="chart-two">
                  <Stats />
                </div>
              </div>
            </div>
          </div>
          <div className="user-chart">
            <div className="card">
              <div className="card-body">
                <UserChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Statistic = ({ color, title, value, icon }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-content">
          <div className="writeups">
            <h5 style={{ color: color }}>{value}</h5>
            <p>{title}</p>
          </div>
          <div className="values">
            <span>{icon}</span>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: color }} className="change">
        <p>% change</p>
        <span>
          <BsFillBarChartFill />
        </span>
      </div>
    </div>
  );
};
export default Dashboard;
