import React, { useState, useEffect } from "react";
import { useTable, useGlobalFilter } from "react-table";
import "./DocumentRapidus.css";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MockDocumentData from "./const.js";
import Checkbox from "../Common/Checkbox"; // Import the reusable Checkbox component
import { FormattedMessage, useIntl } from "react-intl";

const columns = [
  { Header: <FormattedMessage id="docNo" defaultMessage="Doc. No." />, accessor: "docNo" },
  { Header: <FormattedMessage id="version" defaultMessage="Version" />, accessor: "version" },
  { Header: <FormattedMessage id="titleDoc" defaultMessage="Title Doc." />, accessor: "title" },
  { Header: <FormattedMessage id="group" defaultMessage="Group" />, accessor: "group" },
  { Header: <FormattedMessage id="EDAPartner" defaultMessage="EDA Partner" />, accessor: "partner" },
];

const DocumentTablePage = () => {
 const default_EDA = { "Cadence": false, "Synopsys": false, "Siemens": false };
 const default_DOC = { "Design_Rule": false, "DRC_Command_File": false, "OASIS_Layer_Usage_Description": false }
  const [edaPartnerCheckbox, setEdaPartnerCheckbox] = useState(default_EDA);
  const [docGroupCheckbox, setDocGroupCheckbox] = useState(default_DOC);
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
  const [data, setData] = useState(MockDocumentData);
  const intl = useIntl();

  const tableInstance = useTable(
    { columns, data, globalFilter },
    useGlobalFilter
  );

  useEffect(() => {
    if (Object.values(edaPartnerCheckbox).every((value) => value === false)) {
      setData(MockDocumentData);
    } else {
      const partnerArray = Object.entries(edaPartnerCheckbox);
      const filteredData = MockDocumentData.filter((item) => partnerArray.some((ele) => (ele[0] == item.partner) && ele[1]));
      setData(filteredData);
    }
  }, [edaPartnerCheckbox]);


  useEffect(() => {
    if (Object.values(docGroupCheckbox).every((value) => value === false)) {
      setData(MockDocumentData);
    } else {
      const partnerArray = Object.entries(docGroupCheckbox);
      const filteredData = MockDocumentData.filter((item) => partnerArray.some((ele) => (ele[0] == item.group) && ele[1]));
      setData(filteredData);
    }
  }, [docGroupCheckbox]);


  const handleChangeEDAPartner = (event, partner) => {
    setEdaPartnerCheckbox((prevState) => ({ ...prevState, [partner]: event.target.checked }));
  };
  const handleChangeDocGroup = (event, partner) => {
    setDocGroupCheckbox((prevState) => ({ ...prevState, [partner]: event.target.checked }));
  };

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
          placeholder={intl.formatMessage({ id: 'searchDoc', defaultMessage: 'search Doc No. or Title' })}
          className="search-bar-new"
          value={searchInput}
          onChange={(e) => {
            const value = e.target.value;
            setSearchInput(value);
            setFilter(value);
          }}
        />
        <div style={{ paddingRight: "340px" }}>
          <button className="outline-btn">
            <FormattedMessage id="downloadStatus" defaultMessage="View Download Status" />
            </button>
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
            {headerGroups.map((headerGroup, idx) => (
              <tr key={idx}  {...headerGroup.getHeaderGroupProps()}>
                <th></th>
                {headerGroup.headers.map((column) => {
                  const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                  return (
                    <th key={key} {...restHeaderGroupProps}>
                      {column.render("Header")}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, idx) => {
              prepareRow(row);
              const { key = idx, ...restProps } = row.getRowProps();
              return (
                <tr key={key} {...restProps}>
                  <td>
                    <input
                      type="checkbox"
                      style={{
                        accentColor: "#00401a",
                      }}
                    />

                  </td>
                  {row.cells.map((cell, idx) => (
                    <td key={idx} {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
            <p style={{ fontSize: '20px' }}><FormattedMessage id="filterSettings" defaultMessage="Filter Settings" /></p>
            <button
              onClick={() => { 
                setEdaPartnerCheckbox(default_EDA);
                setDocGroupCheckbox(default_DOC);
                setSearchInput("");
                setFilter("");
              }}
              style={{
                color: "#3b82f6",
                textDecoration: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FormattedMessage id="clear" defaultMessage="Clear" />
            </button>
          </div>

          <div className="filter-group">
            <p>
              <strong>Doc Group</strong>
            </p>
            <label>
              <input type="checkbox" style={{ accentColor: "#00401a" }} checked={docGroupCheckbox?.Design_Rule} onChange={(e) => handleChangeDocGroup(e, "Design_Rule")} /> 
                {intl.formatMessage({id:"designRule", defaultMessage:"Design Rule"})}
            </label>
            <label>
              <input type="checkbox" style={{ accentColor: "#00401a" }} checked={docGroupCheckbox?.DRC_Command_File} onChange={(e) => handleChangeDocGroup(e, "DRC_Command_File")} /> 
              {intl.formatMessage({id:"DRCCommandFile", defaultMessage:"DRC Commend File"})}
            </label>
            <label>
              <input type="checkbox" style={{ accentColor: "#00401a" }} checked={docGroupCheckbox?.OASIS_Layer_Usage_Description} onChange={(e) => handleChangeDocGroup(e, "OASIS_Layer_Usage_Description")} /> 
              {intl.formatMessage({id:"OASISLayerUsageDescription" ,defaultMessage:"OASIS Layer Usage Description"})}
            </label>
          </div>

          <div className="filter-group">
            <p>
              <strong><FormattedMessage id="EDAPartner" defaultMessage="EDA Partner" /></strong>
            </p>
            <label>
              <input type="checkbox" style={{ accentColor: "#00401a" }} checked={edaPartnerCheckbox?.Cadence} onChange={(e) => handleChangeEDAPartner(e, "Cadence")} />
              Cadence
            </label>
            <label>
              <input type="checkbox" style={{ accentColor: "#00401a" }} checked={edaPartnerCheckbox?.Synopsys} onChange={(e) => handleChangeEDAPartner(e, "Synopsys")} />
              Synopsys
            </label>
            <label>
              <input type="checkbox" style={{ accentColor: "#00401a" }} checked={edaPartnerCheckbox?.Siemens} onChange={(e) => handleChangeEDAPartner(e, "Siemens")} />
              Siemens
            </label>
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
