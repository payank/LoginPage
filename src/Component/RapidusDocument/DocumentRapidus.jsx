import React, { useState } from "react";
import { useTable, useGlobalFilter } from "react-table";
import "./DocumentRapidus.css";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MockDocumentData from "./const.js";
import Checkbox from "../Common/Checkbox"; // Import the reusable Checkbox component
import { FormattedMessage, useIntl } from "react-intl";

const columns = [
  { Header: <FormattedMessage id="docNo" defaultMessage="Doc. No."/>, accessor: "docNo" },
  { Header: <FormattedMessage id="version" defaultMessage="Version"/>, accessor: "version" },
  { Header: <FormattedMessage id="titleDoc" defaultMessage="Title Doc."/>, accessor: "title" },
  { Header: <FormattedMessage id="group" defaultMessage="Group"/>, accessor: "group" },
  { Header: <FormattedMessage id="EDAPartner" defaultMessage="EDA Partner"/>, accessor: "partner" },
];

const DocumentTablePage = () => {
  const globalFilter = (rows, columnIds, filterValue) => {
    if (typeof filterValue !== 'string') return rows;
  
    const search = filterValue.toLowerCase();
    return rows.filter((row) => {
      const docNo = String(row.values.docNo || "").toLowerCase();
      const title = String(row.values.title || "").toLowerCase();
  
      return docNo.includes(search) || title.includes(search);
    });
  };
  const [searchInput, setSearchInput] = useState("");
  const intl = useIntl();

  const tableInstance = useTable(
    { columns, data: MockDocumentData, globalFilter },
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
          placeholder={intl.formatMessage({id:'searchDoc', defaultMessage:'search Doc No. or Title'})}
          className="search-bar-new"
          value={searchInput}
          onChange={(e) => {
            const value = e.target.value;
            setSearchInput(value);
            setFilter(value);
          }}
        />
        <div style={{ paddingRight: "340px" }}>
          <button className="outline-btn"><FormattedMessage id="downloadStatus" defaultMessage="View Download Status"/></button>
          <button className="solid-btn">Add to DocCart</button>
        </div>
      </div>

      {/* home */}
      <div className="breadcrumb">
        {" "}
        <HomeOutlinedIcon
          style={{ fontSize: "20px", marginBottom: "-4px" }}
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
                    <input
                      type="checkbox"
                      style={{
                        accentColor: "#00401a",
                      }}
                    />
                    
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
            <p style={{ fontSize:'20px'}}><FormattedMessage id="filterSettings" defaultMessage="Filter Settings"/></p>
            <button
              onClick={() => {}}
              style={{
                color: "#3b82f6",
                textDecoration: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FormattedMessage id="clear" defaultMessage="Clear"/>
            </button>
          </div>

          <div className="filter-group">
            <p>
              <strong>Doc Group</strong>
            </p>
            <label>
              <input type="checkbox" style={{
                accentColor: "#00401a",
              }} /> <FormattedMessage id="designRule" defaultMessage="Design Rule"/>
            </label>
            <label>
              <input type="checkbox" style={{
                accentColor: "#00401a",
              }} /> <FormattedMessage id="DRCCommandFile" defaultMessage="DRC Commend File"/>
            </label>
            <label>
              <input type="checkbox" style={{
                accentColor: "#00401a",
              }} /> <FormattedMessage id="OASISLayerUsageDescription" defaultMessage="OASIS Layer Usage Description"/>
            </label>
          </div>

          <div className="filter-group">
            <p>
              <strong><FormattedMessage id="EDAPartner" defaultMessage="EDA Partner"/></strong>
            </p>
            <Checkbox label="Cadence" />
            <Checkbox label="Magma" />
            <Checkbox label="Mentor Graphic" />
          </div>

          <div className="filter-group">
            <p>
              <strong>Eff. Date</strong>
            </p>
            <Checkbox label="Within 3 months" />
            <Checkbox label="Within 3 to 6 months" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentTablePage;
