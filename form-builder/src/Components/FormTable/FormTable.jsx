import React, { useState, useEffect, Fragment } from 'react';
import { TableBox, TopBar, SearchBar, ButtonText, TableStyles } from "./FormTable.style"
import ReactTable from 'react-table-6';
import { Button } from 'reactstrap';
import { FaEye, FaTrash, FaEdit, FaPlus } from 'react-icons/fa';

import 'react-table-6/react-table.css';
import { connect } from 'react-redux';
import { load_forms } from '../../Redux/Actions/Actions';
const FormTable = (props) => {

	const [ searchText, setSearchText ] = useState("");


	const { LoadForms } = props;
	useEffect(() => {
		LoadForms(`?search=${searchText}`)
	}, [searchText, LoadForms])


    const columns = [
		{
			Header: 'Id',
			accessor: 'id',
			className: 'text-center',
			filterable: false,
			sortable: false,
			headerClassName: 'react-table-header-class',
			width: 100,
		},
		{
			Header: 'Title',
			accessor: 'name',
			className: 'text-center',
			filterable: false,
			sortable: false,
			headerClassName: 'react-table-header-class',
            width : 300
		},
        {
			Header: 'Form URL',
			accessor: 'formUrl',
			className: 'text-center',
			filterable: false,
			sortable: false,
			headerClassName: 'react-table-header-class'
		},
		{
			Header: 'Action',
			accessor: 'action',
			className: 'text-center',
			filterable: false,
			sortable: false,
			headerClassName: 'react-table-header-class',
			width: 300,
			Cell: (props) => {
				return (
					<div className="">
						<Button
							data-test = "view-button"
							className="c-btn mr-10"
							color="success"
							// onClick={() => showUserDetails(props.original.id)}
                            >
							<div className="fs-12 medium-text">
								<FaEye /> View
							</div>
						</Button>
						<Button
							data-test = "edit-button"
							className="c-btn mr-10"
							color="primary"
							// onClick={() => formAction("edit",props.original)}
                            >
							<div className="fs-14 medium-text">
								<FaEdit /> Edit
							</div>
						</Button>
						<Button
							data-test = "delete-button"
							color="danger"
							className="c-btn c-danger"
							// onClick={() => userDeleteHandler(props.original.id)}
                            >
							<div className="fs-14 medium-text">
								<FaTrash /> Delete
							</div>
						</Button>
					</div>
				);
			}
		},
		{
			Header: 'Created On',
			accessor: 'createdAt',
			className: 'text-center',
			filterable: false,
			sortable: false,
			headerClassName: 'react-table-header-class',
			width: 150,
			Cell: (props) => {
				return `${new Date(props.original.createdAt).getMonth() +
					1}/${new Date(
					props.original.createdAt
				).getDate()}/${new Date(
					props.original.createdAt
				).getFullYear()}`;
			}
		}
	];

    return <Fragment>
        <TableBox>
            <TopBar>
            <SearchBar>
            <input
							data-test="search-input"
							value={searchText || ''}
							onChange={(e) => setSearchText(e.target.value)}
							type="text"
							placeholder="Search..."
							className="fs-14 medium-text plr-10 form-control"
						/>
            </SearchBar>
						
						<Button
							data-test = "add-button"
							className="c-btn mr-10"
							color="warning"
							// onClick={() => formAction("add")}
                            >
							<ButtonText className="fs-12 medium-text">
								<FaPlus style = {{ paddingRight:"5px"}}/> Create Form
							</ButtonText>
						</Button>

            </TopBar>
			<TableStyles>
			<ReactTable
            style={{
				border: "1px solid #eee",
				boxShadow: "none"
				}}
				className="-striped -highlight reactTable"
				data={props.TableData}
				columns={columns}
				minRows={0}
				defaultPageSize={8}
                showPagination={true}
                showPageSizeOptions={false}
			/>
            </TableStyles>


        </TableBox>



    </Fragment>
}
const mapDispatchToProps = (dispatch) => {
	return {
		LoadForms : (data) => dispatch(load_forms(data))	
	}
}

const mapStateToProps = (state) => {
	return {
		TableData : state.FormsReducer.forms

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTable)