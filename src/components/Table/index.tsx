import React from "react";
import { Opponent } from "../../types";
import "./Table.css";
import PlayingCard from "../PlayingCard";

interface Props {
	opponents: Opponent[];
}

const Table: React.FC<Props> = () => (
	<div className="table-wrapper">
		<div className="table-top"></div>
	</div>
);

export default Table;
