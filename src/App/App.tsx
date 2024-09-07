import { CSSProperties, useState } from 'react';
import { defaultArticleState } from '../constants/articleProps';
import { ArticleParamsForm } from '../components/article-params-form/ArticleParamsForm';
import { Article } from '../components/article/Article';

import styles from '../styles/index.module.scss';

export const App = () => {
	const [currentArticleState, setCurrentArticleState] =
		useState(defaultArticleState);

	return (
		<div
			className={styles.main}
			style={
				{
					'--font-family': currentArticleState.fontFamilyOption.value,
					'--font-size': currentArticleState.fontSizeOption.value,
					'--font-color': currentArticleState.fontColor.value,
					'--container-width': currentArticleState.contentWidth.value,
					'--bg-color': currentArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				currentArticleState={currentArticleState}
				setCurrentArticleState={setCurrentArticleState}
			/>
			<Article />
		</div>
	);
};
