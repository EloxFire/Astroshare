import React, {ReactNode} from 'react';
import dayjs from "dayjs";
import {routes} from "../routes";
import {Ressource} from "../scripts/types/Ressource";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import '../styles/pages/ressources/ressource.scss'

interface RessourceInfosBoxProps {
  ressource: Ressource,
  onFileSelect: (e: string) => void
  onClickDownload: (e: boolean) => void
  onlyDownload?: boolean
}

export default function RessourceInfosBox({ ressource, onFileSelect, onClickDownload, onlyDownload }: RessourceInfosBoxProps) {

  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <div className={"ressource-infos"}>
      <div className={"part left"} style={{flex: 1}}>
        <p className={"ressource-infos__title"}>Informations sur la ressource :</p>
        <div className={"ressource-info-container"}>
          <p>Format :</p>
          {
            ressource.format?.split(',').map((format: string, index: number): ReactNode => (
              <span key={index}>{format}</span>
            ))
          }
        </div>
        <div className={"ressource-info-container"}>
          <p>Niveau :</p>
          {
            ressource.level.split(',').map((level: string, index: number): ReactNode => (
              <span key={index}>{level}</span>
            ))
          }
        </div>
        <div className={"ressource-info-container"}>
          <p>Tags :</p>
          {
            ressource.tags?.split(',').map((level: string, index: number): ReactNode => (
              <span key={index}>{level}</span>
            ))
          }
        </div>
        <div className={"ressource-info-container"}>
          <p>Dernière mise à jour :</p>
          <span>{dayjs(ressource.updatedAt.toDate()).format('DD MMM YYYY')}</span>
        </div>
        <div className={"ressource-info-container"}>
          <p>Description :</p>
          <span style={{backgroundColor: 'transparent', border: 'none'}}>{ressource.description}</span>
        </div>
        {
          ressource.notes && ressource.notes !== "" &&
            <div className={"ressource-info-container"}>
                <p>Notes suplémentaires :</p>
                <span style={{backgroundColor: 'transparent', border: 'none'}}>{ressource.notes}</span>
            </div>
        }

        <div className={"separator"}/>
        <p
          className={"ressource-infos__title"}>{onlyDownload ? "Téléchargez la ressource" : "Cette ressource est aussi disponible en téléchargement !"}</p>
        <div>
          {
            !user &&
              <button className="ressource-details__left__download-container__download-button"
                      onClick={() => navigate(routes.login.path, {state: {fromPage: window.location.href}})}
                      style={{marginTop: '20px'}}>Connectez-vous pour télécharger</button>
          }
          {
            user &&
              <>
                {
                  ressource.files && ressource.files?.length > 1 && (
                    <select onChange={(e) => onFileSelect(e.target.value)}>
                      {
                        ressource.files?.map((package_link, package_index) => {
                          return (
                            <option key={`ressource-details__package__${package_index}`}
                                    value={package_link}>{ressource.downloadNames[package_index]}</option>
                          )
                        })
                      }
                    </select>
                  )
                }
                <button className="download-button" onClick={() => {onClickDownload(true)}}>Télécharger le document</button>
              </>
          }
        </div>
      </div>
      <div className={"part right"}>
        <img src={ressource.filePreview}/>
      </div>
    </div>
  );
}