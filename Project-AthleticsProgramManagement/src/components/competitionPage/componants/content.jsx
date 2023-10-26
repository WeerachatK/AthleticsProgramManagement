import React from "react";
import { Link } from "react-router-dom";
import "./content.css";

function Content() {
  return (
    <div className="container-content">
      <div className="content-filter">
        <div className="filter-day">
          <div className="text-3xl text-[#002880] font-semibold mr-5">DAY</div>
          <ButtonDay />
          <ButtonDay />
          <ButtonDay />
          <ButtonDay />
          <ButtonDay />
          <ButtonDay />
        </div>
        <div className="line">
          <div className="line-item1">
            <Line />
          </div>
          <div className="line-item2">
            <Line />
          </div>
        </div>
        <div className="filter-event">
          <div className="text-3xl text-[#002880] font-semibold mr-5">
            EVENTS
          </div>
          <ButtonDay />
          <ButtonDay />
          <ButtonDay />
          <ButtonDay />
        </div>
      </div>
      <div className="content-event">
        <Running />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
      </div>
    </div>
  );
}

export default Content;

function TournamentCard() {
  return (
    <Link to="/competition/event">
      <div className="card-container">
        <div className="card-head">
          <div className="time">1.00 PM</div>
          <div className="gender">Women's</div>
        </div>
        <div className="card-body flex justify-center items-center">
          <svg
            width="149"
            height="149"
            viewBox="0 0 149 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74.0764 11.9478C108.412 11.9478 136.205 39.7351 136.205 74.0764C136.205 108.412 108.418 136.205 74.0764 136.205C39.7405 136.205 11.9478 108.418 11.9478 74.0764C11.9478 39.7405 39.7351 11.9478 74.0764 11.9478ZM74.0764 0C33.165 0 0 33.165 0 74.0764C0 114.988 33.165 148.153 74.0764 148.153C114.988 148.153 148.153 114.988 148.153 74.0764C148.153 33.165 114.988 0 74.0764 0ZM74.0764 16.7269C42.4031 16.7269 16.7269 42.4031 16.7269 74.0764C16.7269 105.75 42.4031 131.426 74.0764 131.426C105.75 131.426 131.426 105.75 131.426 74.0764C131.426 42.4031 105.75 16.7269 74.0764 16.7269ZM74.0764 29.8695C80.0151 29.8695 84.8295 34.6839 84.8295 40.6226C84.8295 46.5612 80.0151 51.3756 74.0764 51.3756C68.1378 51.3756 63.3234 46.5612 63.3234 40.6226C63.3234 34.6839 68.1378 29.8695 74.0764 29.8695ZM109.245 59.1485C100.669 61.1734 92.6642 62.9563 84.7103 63.87C84.948 92.0904 87.956 99.6736 91.4553 108.495C91.6977 109.106 91.9424 109.723 92.1887 110.353C93.2691 113.119 91.9029 116.237 89.1369 117.317C86.3707 118.398 83.253 117.032 82.1726 114.266C81.906 113.583 81.6405 112.912 81.3769 112.246C79.0692 106.418 76.9106 100.967 75.5233 90.8034H72.6301C71.2415 100.976 69.0792 106.434 66.7607 112.287C66.5023 112.939 66.242 113.596 65.9806 114.266C64.9008 117.03 61.7839 118.398 59.0165 117.317C56.2506 116.237 54.8844 113.119 55.9647 110.353C56.2132 109.717 56.4601 109.095 56.7046 108.478C60.1969 99.6723 63.2053 92.0865 63.4432 63.87C55.4892 62.9566 47.4845 61.1737 38.908 59.1485C36.3393 58.5419 34.7484 55.968 35.3551 53.399C35.9617 50.8299 38.5353 49.2393 41.1047 49.846C69.9843 56.6649 78.2274 56.6511 107.049 49.846C109.618 49.2396 112.192 50.8299 112.799 53.399C113.405 55.968 111.814 58.5422 109.245 59.1485Z"
              fill="#0052FF"
            />
            <path
              d="M74.0764 1.9478C108.412 11.9478 136.205 39.7351 136.205 74.0764C136.205 108.412 108.418 136.205 74.0764 136.205C39.7405 136.205 11.9478 108.418 11.9478 74.0764C11.9478 39.7405 39.7351 11.9478 74.0764 11.9478ZM74.0764 0C33.165 0 0 33.165 0 74.0764C0 114.988 33.165 148.153 74.0764 148.153C114.988 148.153 148.153 114.988 148.153 74.0764C148.153 33.165 114.988 0 74.0764 0ZM74.0764 16.7269C42.4031 16.7269 16.7269 42.4031 16.7269 74.0764C16.7269 105.75 42.4031 131.426 74.0764 131.426C105.75 131.426 131.426 105.75 131.426 74.0764C131.426 42.4031 105.75 16.7269 74.0764 16.7269ZM74.0764 29.8695C80.0151 29.8695 84.8295 34.6839 84.8295 40.6226C84.8295 46.5612 80.0151 51.3756 74.0764 51.3756C68.1378 51.3756 63.3234 46.5612 63.3234 40.6226C63.3234 34.6839 68.1378 29.8695 74.0764 29.8695ZM109.245 59.1485C100.669 61.1734 92.6642 62.9563 84.7103 63.87C84.948 92.0904 87.956 99.6736 91.4553 108.495C91.6977 109.106 91.9424 109.723 92.1887 110.353C93.2691 113.119 91.9029 116.237 89.1369 117.317C86.3707 118.398 83.253 117.032 82.1726 114.266C81.906 113.583 81.6405 112.912 81.3769 112.246C79.0692 106.418 76.9106 100.967 75.5233 90.8034H72.6301C71.2415 100.976 69.0792 106.434 66.7607 112.287C66.5023 112.939 66.242 113.596 65.9806 114.266C64.9008 117.03 61.7839 118.398 59.0165 117.317C56.2506 116.237 54.8844 113.119 55.9647 110.353C56.2132 109.717 56.4601 109.095 56.7046 108.478C60.1969 99.6723 63.2053 92.0865 63.4432 63.87C55.4892 62.9566 47.4845 61.1737 38.908 59.1485C36.3393 58.5419 34.7484 55.968 35.3551 53.399C35.9617 50.8299 38.5353 49.2393 41.1047 49.846C69.9843 56.6649 78.2274 56.6511 107.049 49.846C109.618 49.2396 112.192 50.8299 112.799 53.399C113.405 55.968 111.814 58.5422 109.245 59.1485Z"
              stroke="black"
            />
          </svg>
        </div>
        <div className="card-foot">
          <div className="date bg-blue-x-gradient px-2 py-1 text-sm">
            17 AUG 2023
          </div>
          <div className="sport-name h-14 px-2 py-1 text-lg">
            Javelin Throw Final
          </div>
        </div>
      </div>
    </Link>
  );
}

function Line() {
  return (
    <svg
      width="863"
      height="4"
      viewBox="0 0 863 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 2H863" stroke="#002880" stroke-width="4" />
    </svg>
  );
}

function ButtonDay() {
  return (
    <button class="but m-1 flex w-20 h-10 px-4 justify-center items-center space-x-1 flex-shrink-0 rounded-md border border-blue-900 bg-transparent">
      All
    </button>
  );
}

function Running() {
  const imagePath = "./DMB-724.JPG";
  return (
    <Link to="/competition/event">
      <div className="card-container">
        <div className="card-head">
          <div className="time">1.00 PM</div>
          <div className="gender">Men's</div>
        </div>
        <div className="card-body flex justify-center items-center">
          <div>
            <img src = 'DMB-724.JPG' alt="My Image" />
          </div>
        </div>
        <div className="card-foot">
          <div className="date bg-blue-x-gradient px-2 py-1 text-sm">
            17 AUG 2023
          </div>
          <div className="sport-name h-14 px-2 py-1 text-lg">Runing</div>
        </div>
      </div>
    </Link>
  );
}
