import React from "react";
import { Opponent } from "../../types";
import "./Table.css";

interface Props {
	opponents: Opponent[];
}

const Table: React.FC<Props> = ({ children }) => (
	<div className="table-wrapper">
		<div className="table-top">{children}</div>
	</div>
);

export default Table;
