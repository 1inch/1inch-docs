import React from 'react';
import styles from './FileDownload.module.css';
import FileDownloadIcon from '../../../static/img/file-icon.svg'

export class FileDownload extends React.Component {
    render() {
        const {
            link,
            title
        } = this.props;

        return <a className={styles.fileDownload}
                  href={link}
                  target="_blank">
            <FileDownloadIcon className={styles.fileDownloadIcon}/>
            <p className={styles.fileDownloadTitle}>{title}</p>
        </a>;
    }
}
