import React, { useState, useEffect, Fragment } from 'react';
import { TableBox, TopBar, SearchBar, ButtonText, TableStyles } from "./FormTable.style"
import ReactTable from 'react-table-6';
import { Button } from 'reactstrap';
import { FaEye, FaTrash, FaEdit, FaPlus } from 'react-icons/fa';
import swal from 'sweetalert'


import 'react-table-6/react-table.css';
import { connect } from 'react-redux';
import { load_forms } from '../../Redux/Actions/Actions';
import { deleteForm } from "../../Apis"
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
			headerClassName: 'react-table-header-class',
			Cell : (CellProps) => {	
				return <div>
					<a href={`/form/${CellProps.original.id}`}>{CellProps.original.formUrl}</a>
				</div>
			}
		},
		{
			Header: 'Action',
			accessor: 'action',
			className: 'text-center',
			filterable: false,
			sortable: false,
			headerClassName: 'react-table-header-class',
			width: 300,
			Cell: (Cellprops) => {
				return (
					<div className="">
						<Button
							data-test = "view-button"
							className="c-btn mr-10"
							color="success"
							onClick={(e) => props.history.push(`/forms/view/${Cellprops.original.id}`, {id : Cellprops.original.id})}
                            >
							<div className="fs-12 medium-text">
								<FaEye /> View
							</div>
						</Button>
						<Button
							data-test = "delete-button"
							color="danger"
							className="c-btn c-danger"
							onClick={() => userDeleteHandler(Cellprops.original.id)}
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

	const userDeleteHandler = (id) => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this record!",
			icon: "warning",
			buttons: true,
			dangerMode: true
		  }).then(willDelete => {
			  if(willDelete){
					
					deleteForm(id).then(res => {
					  swal("Deleted", {
						  icon : "success"
					  });
					  props.LoadForms(`?search=${searchText}`)
				  })
			  }
		  })

	}

	const formAction = (action,data) =>  {
		if(action === "add"){
			props.history.push("/forms/add")
		}
	}

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
							onClick={() => formAction("add")}
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