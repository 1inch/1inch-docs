import React from 'react';
import styles from './FileDownload.module.css';

export class FileDownload extends React.Component {
    render() {
        const {
            link,
            title
        } = this.props;

        return <a className={styles.fileDownload}
                  href={link}
                  target="_blank">
            <img className={styles.fileDownloadIcon}
                 src="../../../static/img/file-icon.svg"/>
            <p className={styles.fileDownloadTitle}>{title}</p>
        </a>;
    }
}
