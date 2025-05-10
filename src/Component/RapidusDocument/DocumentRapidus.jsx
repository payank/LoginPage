import React, { useState } from "react";
import { useTable, useGlobalFilter } from "react-table";
import "./DocumentRapidus.css";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";

const data = [
  {
    docNo: "A-B11-01",
    version: "2.0",
    title: "Document AAA",
    group: "Design Rule",
    partner: "Cadence",
  },
  {
    docNo: "A-F25-03",
    version: "1.0",
    title: "Document BBB",
    group: "Design Rule",
    partner: "Magma",
  },
  {
    docNo: "A-B11-01",
    version: "2.0",
    title: "Document AAA",
    group: "Design Rule",
    partner: "Cadence",
  },
  {
    docNo: "A-F25-03",
    version: "1.0",
    title: "Document BBB",
    group: "Design Rule",
    partner: "Magma",
  },
  {
    docNo: "A-B11-01",
    version: "2.0",
    title: "Document AAA",
    group: "Design Rule",
    partner: "Cadence",
  },
  {
    docNo: "A-F25-03",
    version: "1.0",
    title: "Document BBB",
    group: "Design Rule",
    partner: "Magma",
  },
  {
    docNo: "A-F25-03",
    version: "1.0",
    title: "Document BBB",
    group: "Design Rule",
    partner: "Magma",
  },
  {
    docNo: "A-B11-01",
    version: "2.0",
    title: "Document AAA",
    group: "Design Rule",
    partner: "Cadence",
  },
  {
    docNo: "A-F25-03",
    version: "1.0",
    title: "Document BBB",
    group: "Design Rule",
    partner: "Magma",
  },
  {
    docNo: "A-B11-01",
    version: "2.0",
    title: "Document AAA",
    group: "Design Rule",
    partner: "Cadence",
  },
  {
    docNo: "A-F25-03",
    version: "1.0",
    title: "Document BBB",
    group: "Design Rule",
    partner: "Magma",
  },
  {
    docNo: "A-B11-01",
    version: "2.0",
    title: "Document AAA",
    group: "Design Rule",
    partner: "Cadence",
  },
];

const columns = [
  { Header: "Doc. No.", accessor: "docNo" },
  { Header: "Version", accessor: "version" },
  { Header: "Title Doc.", accessor: "title" },
  { Header: "Group", accessor: "group" },
  { Header: "EDA Partner", accessor: "partner" },
];

const DocumentTablePage = () => {
  const globalFilter = (rows, columnIds, filterValue) => {
    return rows.filter((row) => {
      const docNo = row.values.docNo.toLowerCase();
      const title = row.values.title.toLowerCase();
      const search = filterValue.toLowerCase();
      return docNo.includes(search) || title.includes(search);
    });
  };
  const [searchInput, setSearchInput] = useState("");

  const tableInstance = useTable(
    { columns, data, globalFilter },
    useGlobalFilter
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter: setFilter,
  } = tableInstance;

  return (
    <div className="container">
      {/* Search and Buttons */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search Doc No. or Title"
          className="search-bar-new"
          value={searchInput}
          onChange={(e) => {
            const value = e.target.value;
            setSearchInput(value);
            setFilter(value);
          }}
        />
        <div style={{ paddingRight: "340px" }}>
          <button className="outline-btn">View Download Status</button>
          <button className="solid-btn">Add to DocCart</button>
        </div>
      </div>

      {/* home */}
      <div className="breadcrumb">
        {" "}
        <HomeIcon
          style={{ color: "black", fontSize: "20px", marginBottom: "-4px" }}
        />{" "}
        Home / Document / All files
      </div>

      <div className="main-content">
        {/* Table */}
        <table {...getTableProps()} className="doc-table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                <th></th>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Filter  */}
        <div className="filter-panel">
          <CloseIcon
            sx={{ color: "black", marginLeft: "260px", marginTop: "-9px" }}
          />
          <div className="filter-header">
            <h3>Filter Settings</h3>
            <a href="#" style={{ color: "#3b82f6", textDecoration: "none" }}>
              Clear
            </a>
          </div>

          <div className="filter-group">
            <p>
              <strong>Doc Group</strong>
            </p>
            <label>
              <input type="checkbox" /> Design Rule
            </label>
            <label>
              <input type="checkbox" /> DRC Commend File
            </label>
            <label>
              <input type="checkbox" /> OASIS Layer Usage Description
            </label>
          </div>

          <div className="filter-group">
            <p>
              <strong>EDA Partner</strong>
            </p>
            <label>
              <input type="checkbox" /> Cadence
            </label>
            <label>
              <input type="checkbox" /> Magma
            </label>
            <label>
              <input type="checkbox" /> Mentor Graphic
            </label>
          </div>

          <div className="filter-group">
            <p>
              <strong>Eff. Date</strong>
            </p>
            <label>
              <input type="checkbox" /> Within 3 months
            </label>
            <label>
              <input type="checkbox" /> Within 3 to 6 months
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentTablePage;
