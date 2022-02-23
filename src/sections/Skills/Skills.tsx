import "./Skills.scss";

import { useMemo } from "react";

import { Header, Slider } from "../../components";
import { Skill } from "../../types";

export function Skills () {
    const skills: Skill[] = useMemo(() => [
        {
            name: "mRemote",
            id: "mremote",
            detail: "Gestionnaire de connexion à distance"
        },
        {
            name: "VMware Workstation",
            id: "vmwareworkstation",
            detail: "Hyperviseur"
        },
        {
            name: "Acronis Snap deploy",
            id: "acronissnapdeploy",
            detail: "Outil de déploiement de postes"
        },
        {
            name: "Gantt Project",
            id: "ganttproject",
            detail: "Outil de gestion et planification de projets"
        },
        {
            name: "VMware ESXI",
            id: "vmwareesxi",
            detail: "Hyperviseur"
        },
        {
            name: "Microsoft Projet",
            id: "microsoftproject",
            detail: "Outil de gestion et planification de projets"
        },
        {
            name: "Veeam Backup & Replication",
            id: "veeambackup",
            detail: "Solution de sauvegarde"
        },
        {
            name: "Proxmox",
            id: "proxmox",
            detail: "Hyperviseur Opensource"
        },
        {
            name: "Rainbow",
            id: "rainbow",
            detail: "Solution de gestion d'autocom"
        },
        {
            name: "M-Files",
            id: "mfiles",
            detail: "Gestion Electronique de Documents (GED)"
        },
        {
            name: "LockSelf",
            id: "lockself",
            detail: "Gestionnaire de mots de passe"
        },
        {
            name: "Airwatch",
            id: "lockself",
            detail: "Mobile Device Management"
        },
        {
            name: "Kubernetes",
            id: "kubernetes",
            detail: "Système d'automatisation de déploiement et de montée en charge de conteneurs."
        },
        {
            name: "Veeam One",
            id: "veeamone",
            detail: "Logiciel de supervision"
        },
        {
            name: "SAP",
            id: "sap",
            detail: "ERP - Utilisé comme logiciel de gestion de demandes d'achats."
        },
        {
            name: "Esker",
            id: "esker",
            detail: "Logiciel de dématérialisation de factures"
        },
        {
            name: "Cleemy",
            id: "cleemy",
            detail: "Logiciel de dématérialisation de note de frais"
        },
        {
            name: "Symantec",
            id: "symantec",
            detail: "Antivirus"
        },
        {
            name: "Sentinel One",
            id: "sentinelone",
            detail: "EDR"
        },
        {
            name: "Uniflow",
            id: "uniflow",
            detail: "Solution de gestion centralisée des impressions"
        },
        {
            name: "OOdrive",
            id: "oodrive",
            detail: "Solution de partage collaboratif"
        },
        {
            name: "Nuxeo",
            id: "nuxeo",
            detail: "Gestion Electronique de Documents (GED)"
        }
    ], []);

    const skillPagination = useMemo(()=> {
        const remainingSkills = Array.from(skills);
        const pagination : Skill[][] = [[]];
        let current = 0;
        while (remainingSkills.length > 0) {
            for (let index = 0; index < 4; index ++) {
                const skill = remainingSkills.shift();
                if (index === 0) {
                    pagination[current] = [];
                }
                if (skill) {
                    pagination[current].push(skill);
                }
                if (index === 3) {
                    current += 1;
                }
            }
        }
        return pagination;
    },[skills]);

    return (
        <section className="section-skills" id="competences">
            <Header content="Compétences" />
            <Slider>
                {
                    skillPagination.map((slide, slideIndex) => (
                        <div key={slideIndex} className="section-skills__slide keen-slider__slide">
                            {
                                slide.map(skill => (
                                    <div key={skill.id} className="skill-item">
                                        <img className="skill-item__logo" src={`/images/skills/${skill.id}.svg`} alt={skill.name} />
                                        <div>
                                            <h5 className="skill-item__name">{skill.name}</h5>
                                            <p className="skill-item__detail">{skill.detail}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </Slider>
        </section>
    );
}
