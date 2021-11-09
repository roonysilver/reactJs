/* eslint-disable no-use-before-define */
import React from 'react';
import {CCard, CLabel, CCol, CRow, CImg, CLink, CButton, CInput} from '@coreui/react';
import { useTranslation } from 'react-i18next';
import $ from 'jquery';
/**
 * @author Zin Min Myat
 * @create 18/05/2021
 * @param  {*} props
 * @returns output shown in web page
 */
const ContractExpire=props=> {
    const{t} = useTranslation();

    return (<>
        {
            props.data.length > 0  &&
            <>
            
                    <CRow id="table">
                        <CCol lg="12">
                            <CCol lg="12">
                                <CRow alignHorizontal="start">
                                    {props.upDown == true &&
                                        <CImg src={'/avatars/group_8018.png'} width="17px" height="17px"  onClick={props.upDownBtn} className="pointer image-radius" />
                                    }
                                    {props.upDown == false &&
                                        <CImg src={'/avatars/group_8228.png'} width="17px" height="17px"  onClick={props.upDownBtn} className="pointer image-radius" />
                                    }
                                    <CImg className="m-left-19" src={'/avatars/icon_awesome_star8.png'} width="17px" height="17px" /><p className="m-left-10" style={{fontWeight: "bold",fontSize: "13px"}}>{t('Check Which Employee Contract is Expire')}</p>
                                </CRow>
                            </CCol>
                            
                            {
                                props.upDown == true &&
                                <>
                                <CCol lg="12">
                                    <CRow alignHorizontal="end">
                                        <div className="row-count-msg">{t("Total Rows").replace('%s', props.data.length)}</div>
                                    </CRow>
                                </CCol>
                                <div style={{marginLeft: "38px"}}>
                                    <div className="table-responsive tableFixHead" >
                                        <table className=" table contract-expire" id="contract_expire">
                                            <thead className="">
                                                <tr>
                                                    <th width="50px" className="center" style={{textAlign:'left'}} >
                                                        { t('No') }
                                                    </th>
                                                    <th width="170px" className="center" style={{textAlign:'left'}} >
                                                        { t('Contract Start Date') }
                                                    </th>
                                                    <th width="170px" className="center" style={{textAlign:'left'}} >
                                                        { t('Contract End Date') }
                                                    </th>
                                                    <th width="100px" className="center" style={{textAlign:'left'}} >
                                                        { t('Employee ID') }
                                                    </th>
                                                    <th width="150px" className="center" style={{textAlign:'left'}} >
                                                        { t('Employee Name') }
                                                    </th>
                                                    <th width="170px" className="center" style={{textAlign:'left'}} >
                                                        { t('NRC Number') }
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody className="">
                                                {
                                                    props.data.map((i,index) => {
                                                    return(
                                                            <tr width="100%" key={index} className="">
                                                                <td className="td-num" width="50px">
                                                                    {index+1}
                                                                </td>
                                                                <td className="td-num" width="170px" style={{backgroundColor: "#f7daf7"}}>
                                                                    {i.contract_start_date}
                                                                </td>
                                                                <td className="td-num" width="170px" style={{backgroundColor: "#f7daf7"}}>
                                                                    {i.contract_end_date}
                                                                </td>
                                                                <td className="td-num" width="100px" >
                                                                    {i.employee_id}
                                                                </td>
                                                                <td className="td-num" width="150px" >
                                                                    {i.employee_name}
                                                                </td> 
                                                                <td className="td-num" width="170px" style={{backgroundColor: "#f7daf7"}}>
                                                                    {i.nrc_no}
                                                                </td>
                                                            </tr>
                                                    )
                                                    })
                                                }   
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </>
                            }
                        </CCol>
                    </CRow><br/>
            </>
        }
    </>
    );
}
export default ContractExpire;
