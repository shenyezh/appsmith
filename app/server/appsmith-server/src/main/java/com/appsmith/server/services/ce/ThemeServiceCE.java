package com.appsmith.server.services.ce;

import com.appsmith.server.acl.AclPermission;
import com.appsmith.server.domains.Application;
import com.appsmith.server.domains.ApplicationMode;
import com.appsmith.server.domains.Theme;
import com.appsmith.server.services.CrudService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ThemeServiceCE extends CrudService<Theme, String> {
    Mono<Theme> getApplicationTheme(String applicationId, ApplicationMode applicationMode);
    Flux<Theme> getApplicationThemes(String applicationId);
    Flux<Theme> getSystemThemes();
    Mono<Theme> getSystemTheme(String themeName);
    Mono<Theme> updateTheme(String applicationId, Theme resource);
    Mono<Theme> changeCurrentTheme(String themeId, String applicationId);

    /**
     * Returns a themeId that was fetched earlier and stored to cache.
     * If cache is empty, it'll fetch from DB, store in cache and return
     * @return Default theme id as string
     */
    Mono<String> getDefaultThemeId();

    /**
     * Duplicates a theme if the theme is customized one.
     * If the source theme is a system theme, it'll skip creating a new theme and return the system theme instead.
     * @param srcThemeId ID of source theme that needs to be duplicated
     * @param destApplicationId ID of the application for which theme'll be created
     * @return newly created theme if source is not system theme, otherwise return the system theme
     */
    Mono<Theme> cloneThemeToApplication(String srcThemeId, Application destApplication);
    Mono<Theme> publishTheme(String applicationId);
    Mono<Theme> persistCurrentTheme(String applicationId, Theme theme);
    Mono<Theme> getThemeById(String themeId, AclPermission permission);
    Mono<Theme> save(Theme theme);
    Mono<Theme> updateName(String id, Theme theme);
    Mono<Theme> getOrSaveTheme(Theme theme, Application destApplication);
}
